import { RatingUserModel } from "./rating-user.model";

export class UserMediaModel {
    id!: number;
    userId!: string;
    mediaId!: string;
    rating!: RatingUserModel;
}
