import { formatDuration } from "../../../../shared/helpers/time.helper";
import { MovieDto } from "../../apis/dtos/movie.dto";
import { MovieCategoryType } from "../../apis/enums/movie-category-type.enum";
import style from "./movie-item.style.module.scss";
import Image from "next/image";

export const MovieItem = ({
  title,
  cover_image,
  imdb_rank_percent,
  categories,
  year,
  duration,
}: MovieDto) => {
  return (
    <div className={style.movieItem}>
      <div className={style.movieItem__cover}>
        <Image src={cover_image.path} alt={title} fill />

        <div className={style.movieItem__coverDetails}>
          <span>
            {categories
              .find((x) => x.type === MovieCategoryType.Genre)
              ?.items.map((x) => x.title)
              .join("، ")}
          </span>

          <span>
            {year} /{" "}
            {categories
              .find((x) => x.type === MovieCategoryType.Territory)
              ?.items.map((x) => x.title)
              .join("، ")}
          </span>

          {duration && <span>{formatDuration(duration)}</span>}

          {imdb_rank_percent > 0 && (
            <span className={style.movieItem__coverDetailsRate}>
              IMDB {(imdb_rank_percent / 10).toFixed(1)}
            </span>
          )}
        </div>
      </div>
      <div className={style.movieItem__title}>{title}</div>
    </div>
  );
};
