export type BashfulAPIImg2ImgRequest = {
  init_images: string[]; // base64 encoded images
  denoising_strength: number;
  prompt: string;
  seed: number;
  guidance: number;
  negative_prompt: string;
  model_config: string;
  calling_application: string;
  styling_strength: number;
};

export type BashfulAPITxt2ImgRequest = {
  prompt: string;
  seed: number;
  guidance: number;
  negative_prompt: string;
  model_config: string;
  calling_application: string;
  styling_strength: number;
};

export type BashfulImageAPIResponse = {
  url: string;
};

export type Text2ImgRequest = {
  enable_hr: boolean;
  denoising_strength: number;
  firstphase_width: number;
  firstphase_height: number;
  prompt: string;
  styles: string[];
  seed: number;
  subseed: number;
  subseed_strength: number;
  seed_resize_from_h: number;
  seed_resize_from_w: number;
  sampler_name: string;
  batch_size: number;
  n_iter: number;
  steps: number;
  cfg_scale: number;
  width: number;
  height: number;
  restore_faces: boolean;
  tiling: boolean;
  negative_prompt: string;
  eta: number;
  s_churn: number;
  s_tmax: number;
  s_tmin: number;
  s_noise: number;
  override_settings: Override_setting;
  sampler_index: string;
};

export type Img2ImgRequest = {
  init_images: string[];
  resize_mode: number;
  denoising_strength: number;
  mask: string;
  mask_blur: number;
  inpainting_fill: number;
  inpaint_full_res: boolean;
  inpaint_full_res_padding: number;
  inpainting_mask_invert: number;
  prompt: string;
  styles: string[];
  seed: number;
  subseed: number;
  subseed_strength: number;
  seed_resize_from_h: number;
  seed_resize_from_w: number;
  sampler_name: string;
  batch_size: number;
  n_iter: number;
  steps: number;
  cfg_scale: number;
  width: number;
  height: number;
  restore_faces: boolean;
  tiling: boolean;
  negative_prompt: string;
  eta: number;
  s_churn: number;
  s_tmax: number;
  s_tmin: number;
  s_noise: number;
  override_settings: Override_setting;
  sampler_index: string;
  include_init_images: boolean;
};

export type ImageResponse = {
  images: string[];
  parameters: ImageResponseParameters;
  info: string;
};

type ImageResponseParameters = {
  enable_hr: boolean;
  denoising_strength: number;
  firstphase_width: number;
  firstphase_height: number;
  prompt: string;
  styles: string[];
  seed: number;
  subseed: number;
  subseed_strength: number;
  seed_resize_from_h: number;
  seed_resize_from_w: number;
  sampler_name: string;
  batch_size: number;
  n_iter: number;
  steps: number;
  cfg_scale: number;
  width: number;
  height: number;
  restore_faces: boolean;
  tiling: boolean;
  negative_prompt: string;
  eta: number;
  s_churn: number;
  s_tmax: number;
  s_tmin: number;
  s_noise: number;
  override_settings: Override_setting;
  sampler_index: string;
};

type Override_setting = {};
type State = {};

export type ProgressResponse = {
  progress: number;
  eta_relative: number;
  state: State;
  current_image: string;
};

export type ArtistType = {
  name: string;
  score: number;
  category: string;
};

export type ModelResponse = {
  title: string;
  model_name: string;
  hash: string;
  filename: string;
  config: string;
};

export type ModelConfigResponse = {
  display_name: string;
  name: string;
  negative_prompt: string;
  prompt_prefix: string;
  prompt_suffix: string;
  thumbnail_url: string;
};

export type ConfigAPIResponse = {
  samples_save: boolean;
  samples_format: string;
  samples_filename_pattern: string;
  save_images_add_number: boolean;
  grid_save: boolean;
  grid_format: string;
  grid_extended_filename: boolean;
  grid_only_if_multiple: boolean;
  grid_prevent_empty_spots: boolean;
  n_rows: number;
  enable_pnginfo: boolean;
  save_txt: boolean;
  save_images_before_face_restoration: boolean;
  save_images_before_highres_fix: boolean;
  save_images_before_color_correction: boolean;
  jpeg_quality: number;
  export_for_4chan: boolean;
  use_original_name_batch: boolean;
  save_selected_only: boolean;
  do_not_add_watermark: boolean;
  temp_dir: string;
  clean_temp_dir_at_start: boolean;
  outdir_samples: string;
  outdir_txt2img_samples: string;
  outdir_img2img_samples: string;
  outdir_extras_samples: string;
  outdir_grids: string;
  outdir_txt2img_grids: string;
  outdir_img2img_grids: string;
  outdir_save: string;
  save_to_dirs: boolean;
  grid_save_to_dirs: boolean;
  use_save_to_dirs_for_ui: boolean;
  directories_filename_pattern: string;
  directories_max_prompt_words: number;
  ESRGAN_tile: number;
  ESRGAN_tile_overlap: number;
  realesrgan_enabled_models: Array<string>;
  upscaler_for_img2img: string;
  use_scale_latent_for_hires_fix: boolean;
  ldsr_steps: number;
  ldsr_cached: boolean;
  SWIN_tile: number;
  SWIN_tile_overlap: number;
  face_restoration_model: string;
  code_former_weight: number;
  face_restoration_unload: boolean;
  memmon_poll_rate: number;
  samples_log_stdout: boolean;
  multiple_tqdm: boolean;
  unload_models_when_training: boolean;
  pin_memory: boolean;
  save_optimizer_state: boolean;
  dataset_filename_word_regex: string;
  dataset_filename_join_string: string;
  training_image_repeats_per_epoch: number;
  training_write_csv_every: number;
  training_xattention_optimizations: boolean;
  sd_model_checkpoint: string;
  sd_checkpoint_cache: number;
  sd_vae: string;
  sd_vae_as_default: boolean;
  sd_hypernetwork: string;
  sd_hypernetwork_strength: number;
  inpainting_mask_weight: number;
  initial_noise_multiplier: number;
  img2img_color_correction: boolean;
  img2img_fix_steps: boolean;
  enable_quantization: boolean;
  enable_emphasis: boolean;
  use_old_emphasis_implementation: boolean;
  enable_batch_seeds: boolean;
  comma_padding_backtrack: number;
  CLIP_stop_at_last_layers: number;
  random_artist_categories: Array<string>;
  interrogate_keep_models_in_memory: boolean;
  interrogate_use_builtin_artists: boolean;
  interrogate_return_ranks: boolean;
  interrogate_clip_num_beams: number;
  interrogate_clip_min_length: number;
  interrogate_clip_max_length: number;
  interrogate_clip_dict_limit: number;
  interrogate_deepbooru_score_threshold: number;
  deepbooru_sort_alpha: boolean;
  deepbooru_use_spaces: boolean;
  deepbooru_escape: boolean;
  show_progressbar: boolean;
  show_progress_every_n_steps: number;
  show_progress_grid: boolean;
  return_grid: boolean;
  do_not_show_images: boolean;
  add_model_hash_to_info: boolean;
  add_model_name_to_info: boolean;
  disable_weights_auto_swap: boolean;
  send_seed: boolean;
  send_size: boolean;
  font: string;
  js_modal_lightbox: boolean;
  js_modal_lightbox_initially_zoomed: boolean;
  show_progress_in_title: boolean;
  quicksettings: string;
  localization: string;
  hide_samplers: Array<string>;
  eta_ddim: number;
  eta_ancestral: number;
  ddim_discretize: string;
  s_churn: number;
  s_tmin: number;
  s_noise: number;
  eta_noise_seed_delta: number;
  disabled_extensions: Array<string>;
};

export type ArtistCategories = string[];

export type Img2ImgRequestDepthMask = Img2ImgRequest & {
  script_args: [false, 86, true, 512, 512, false, 2, true, true, true, false];
  script_name: 'Depth aware img2img mask';
};
