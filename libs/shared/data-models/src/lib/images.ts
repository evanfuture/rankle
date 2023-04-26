export interface ImageMetadata {
  enqueue_time: string;
  event: {
    height: number;
    textPrompt: string[];
    width: number;
    eventType: string;
    test: boolean;
    [key: string]: any;
  };
  full_command: string;
  id: string;
  image_paths: string[];
  prompt: string;
  reference_image_num: string;
  reference_job_id: string;
  type: string;
  user_id: string;
  username: string;
}

export interface ImageRank {
  id: string;
  elo_rating: number;
  capture_time: string;
}
