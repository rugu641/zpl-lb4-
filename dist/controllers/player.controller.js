"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PlayerController = class PlayerController {
    constructor(playerRepository) {
        this.playerRepository = playerRepository;
    }
    async create(player) {
        return this.playerRepository.create(player);
    }
    async count(where) {
        return this.playerRepository.count(where);
    }
    async find(filter) {
        return this.playerRepository.find(filter);
    }
    async updateAll(player, where) {
        return this.playerRepository.updateAll(player, where);
    }
    async findById(id, filter) {
        return this.playerRepository.findById(id, filter);
    }
    async updateById(id, player) {
        await this.playerRepository.updateById(id, player);
    }
    async replaceById(id, player) {
        await this.playerRepository.replaceById(id, player);
    }
    async deleteById(id) {
        await this.playerRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/players', {
        responses: {
            '200': {
                description: 'Player model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Player) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Player, {
                    title: 'NewPlayer',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PlayerController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/players/count', {
        responses: {
            '200': {
                description: 'Player model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Player)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PlayerController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/players', {
        responses: {
            '200': {
                description: 'Array of Player model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Player, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Player)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PlayerController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/players', {
        responses: {
            '200': {
                description: 'Player PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Player, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Player)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Player, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PlayerController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/players/{id}', {
        responses: {
            '200': {
                description: 'Player model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Player, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Player, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PlayerController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/players/{id}', {
        responses: {
            '204': {
                description: 'Player PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Player, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Player]),
    tslib_1.__metadata("design:returntype", Promise)
], PlayerController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/players/{id}', {
        responses: {
            '204': {
                description: 'Player PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Player]),
    tslib_1.__metadata("design:returntype", Promise)
], PlayerController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/players/{id}', {
        responses: {
            '204': {
                description: 'Player DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], PlayerController.prototype, "deleteById", null);
PlayerController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.PlayerRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PlayerRepository])
], PlayerController);
exports.PlayerController = PlayerController;
//# sourceMappingURL=player.controller.js.map