"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserP = exports.getUserP = exports.createUserP = void 0;
const bcrypt = __importStar(require("bcrypt"));
const app_1 = require("../app");
const user_1 = require("../entities/user");
const error_1 = require("../utils/error");
const logger_1 = require("../utils/logger");
const HASH_ROUNDS = 6;
const logger = new logger_1.Logger();
function createUserP(user) {
    return __awaiter(this, void 0, void 0, function* () {
        logger.debug('creating a user for id: ', user.id);
        let addedUser;
        try {
            yield app_1.connection.then((connection) => __awaiter(this, void 0, void 0, function* () {
                const userAcc = new user_1.UserAccount();
                userAcc.id = user.id;
                userAcc.name = user.name;
                userAcc.username = user.username;
                userAcc.password = yield hashIt(user.password);
                userAcc.phoneNumber = user.phoneNumber;
                userAcc.email = user.email;
                userAcc.createdAt = new Date();
                addedUser = yield connection.manager.save(userAcc);
            }));
            return { id: addedUser.id };
        }
        catch (err) {
            logger.error('error while creating a user ', err);
            throw new error_1.InvalidRequestError(err.message);
        }
    });
}
exports.createUserP = createUserP;
function getUserP(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        logger.debug('getting a user for id: ', userId);
        try {
            const result = yield app_1.connection.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return connection.manager.findOne(user_1.UserAccount, { id: userId });
            }));
            if (!result) {
                throw new error_1.NotFoundError('no user record found for id: ' + userId);
            }
            return result;
        }
        catch (err) {
            logger.error('error while getting a user ', err);
            throw new error_1.InvalidRequestError(err.message);
        }
    });
}
exports.getUserP = getUserP;
function updateUserP(userId, username) {
    return __awaiter(this, void 0, void 0, function* () {
        logger.debug('updating a user for id: ', userId);
        try {
            const result = yield getUserP(userId);
            if (!result) {
                throw new error_1.NotFoundError('No resource found');
            }
            result.username = username;
            yield app_1.connection.then((connection) => __awaiter(this, void 0, void 0, function* () {
                yield connection.manager.save(result);
            }));
            return result;
        }
        catch (err) {
            logger.error('error while updating a user ', err);
            throw new error_1.InvalidRequestError(err.message);
        }
    });
}
exports.updateUserP = updateUserP;
function hashIt(password) {
    return __awaiter(this, void 0, void 0, function* () {
        const salt = yield bcrypt.genSalt(HASH_ROUNDS);
        const hashed = yield bcrypt.hash(password, salt);
        return hashed;
    });
}
function compareIt(password, hashedPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        const validPassword = yield bcrypt.compare(password, hashedPassword);
        return validPassword;
    });
}