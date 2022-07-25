import createReducer from '@option-blitz/libs/utils/createReducer';
import { videoHandlers } from './handlers';
import { VideoState } from '../../types/store/video';

export const videoInitialState: Readonly<VideoState> = {
  video: [],
};

export default createReducer(videoInitialState, videoHandlers);
