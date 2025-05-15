const Player = require('../models/player');
const { ValidationError, NotFoundError, ServerError } = require('../utils/errors');


const getPlayers = async (req, res, next) => {
    try {

        // Extract and validate query parameters
        let { page = 1, limit = 10, team, sortBy, sortOrder = 'desc', search } = req.query;
        page = parseInt(page);
        limit = parseInt(limit);

        // Validate query parameters
        if (isNaN(page) || page < 1) throw new ValidationError('Invalid page number');
        if (isNaN(limit) || limit < 1 || limit > 100) {
            throw new ValidationError('Invalid limit (must be between 1 and 100)');
        }
        const validSortFields = ['runs', 'salary'];
        if (sortBy && !validSortFields.includes(sortBy)) {
            throw new ValidationError('Invalid sortBy field. Use runs or salary');
        }
        if (sortOrder && !['asc', 'desc'].includes(sortOrder)) {
            throw new ValidationError('Invalid sortOrder. Use asc or desc');
        }

        // Build query
        const query = {};
        if (team) query.team = team;
        if (search) query.$text = { $search: search }; // Use text index for search

        // Set sorting options
        const sortOptions = {};
        if (sortBy) sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1;

        // Fetch players with lean for performance
        const players = await Player.find(query)
            .lean() // Optimize by skipping Mongoose document conversion
            .sort(sortOptions)
            .skip((page - 1) * limit)
            .limit(limit)
            .select('name image role team');

        // Get total count
        const total = await Player.countDocuments(query);

        res.json({
            page,
            limit,
            total,
            players,
        });
    } catch (error) {
        next(error);
    }
};

const createPlayer = async (req, res, next) => {
    try {

        const { name } = req.body;

        // Check if a player with the same name already exists
        const existingPlayer = await Player.findOne({ name: name.trim() });
        if (existingPlayer) {
            throw new ValidationError('Player with this name already exists');
        }

    const imagePath = req.file ? `/uploads/${req.file.filename}` : undefined;
    const player = new Player({ ...req.body, image: imagePath });
    await player.save();
    res.status(201).json(player);
    } catch (error) {
        next(error);
    }
};



const updatePlayer = async (req, res, next) => {
    try {
        const playerId = req.params.id;

        // Fetch the existing player first
        const existingPlayer = await Player.findById(playerId);
        if (!existingPlayer) {
            throw new NotFoundError('Player not found');
        }

        // Build update object based on present fields
        const updates = {};

        if (req.body.name !== undefined) updates.name = req.body.name;
        if (req.body.team !== undefined) updates.team = req.body.team;
        if (req.body.country !== undefined) updates.country = req.body.country;
        if (req.body.runs !== undefined) updates.runs = Number(req.body.runs);
        if (req.body.role !== undefined) updates.role = req.body.role.trim();
        if (req.body.salary !== undefined) updates.salary = Number(req.body.salary);

        // Handle image update if file uploaded
        if (req.file) {
            updates.image = `/uploads/${req.file.filename}`;
        }

        // Apply the update
        const updatedPlayer = await Player.findByIdAndUpdate(playerId, updates, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            message: 'Player updated successfully',
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { updatePlayer };


const deletePlayer = async (req, res, next) => {
    try {
        const player = await Player.findByIdAndDelete(req.params.id);
        if (!player) throw new NotFoundError('Player not found');
        res.json({ message: 'Player deleted successfully' });
    } catch (error) {
        next(error);
    }
};

const getPlayerDescription = async (req, res, next) => {
    try {
        const player = await Player.findById(req.params.id).lean();
        if (!player) throw new NotFoundError('Player not found');
        res.json(player);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getPlayers,
    createPlayer,
    updatePlayer,
    deletePlayer,
    getPlayerDescription,
};