export function fetchMovies(
  offset?: number,
  limit?: number
): Promise<IVideoAsset[]>;
export function fetchMoviesByTitle(
  offset?: number,
  limit?: number
): Promise<IVideoAsset[]>;

export interface IVideoAsset {
  asset_id: number;
  userrating_average: number;
  orders_buy: number;
  poster_url: string;
  timeframe_start: string;
  production_year_max: number;
  director_list_facet?: string[];
  production_year_list_facet: string[];
  title: string;
  episode_number: number;
  media_usage_list?: string[];
  production_year: number;
  editorial_hint: string;
  timeframe_end: string;
  active_license_starttime: string;
  marking_display_list?: string[];
  active_license_endtime: string;
  language_list_facet?: string[];
  production_year_min: number;
  description_short: string;
  season_number: number;
  price_rent: number;
  child_id_list?: string[];
  userrating_count_four_star: number;
  orders_subscription: number;
  description_teaser: string;
  orders_rent: number;
  fsk_level_list_facet: string[];
  userrating_count_one_star: number;
  change_date: string;
  copyright: string;
  object_class: string;
  channel_list_facet?: string[];
  cover_url: string;
  trailer_object: string;
  actor_list_facet?: string[];
  userrating_count_five_star: number;
  author_list_facet?: string[];
  videocontainer_format_list: string[];
  id: string;
  description_long: string;
  marking_list: string[];
  price_buy: number;
  userrating_count_three_star: number;
  generation: number;
  full_object: string;
  language_piff_list_facet?: string[];
  object_type: number;
  cover_big_url?: string;
  tag_list_facet?: string[];
  userrating_count_total: number;
  country_list?: string[];
  userrating_count_two_star: number;
  _version_: number;
  erotic_specifier: number;
  timestamp: string;
  duration?: number;
  parent_id_list?: string[];
  original_title?: string;
  promams_id?: number;
  format_title?: string;
  videoversion_id_list?: number[];
  tv_broadcast_list_facet?: string[];
  aspect_ratio?: string;
  grand_parent_id_list?: string[];
  episode_title?: string;
  airdate?: string;
  genre_list_facet?: string[];
  subgenre_list_facet?: string[];
  studio_list_facet?: string[];
}
