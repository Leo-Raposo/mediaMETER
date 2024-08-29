import { UserMediaModel } from "./user-media.model";

export class RatingUserModel {
    id!: number;
    rating!: number;
    userMedia!: UserMediaModel;
}
