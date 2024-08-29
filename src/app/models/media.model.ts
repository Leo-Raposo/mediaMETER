import { IdiomModel } from './idiom.model';
import { CountryModel } from './country.model';
import { GenreModel } from './genre.model';
import { MediaTypeModel } from './media-type.model';
import { PlatformModel } from './platform.model';
import { TeamModel } from './team.model';
import { UserMediaModel } from './user-media.model';

export class MediaModel {
    id!: number;
    description!: string;
    name!: string;
    photo!: string;
    releasedDate!: string;
    country!: CountryModel;
    genre!: GenreModel;
    idiom!: IdiomModel;
    mediaType!: MediaTypeModel;
    platform: PlatformModel = new PlatformModel();
    team: TeamModel = new TeamModel();
    userMedia!: UserMediaModel;
}
