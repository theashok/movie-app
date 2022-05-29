import React, { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchAllMovies } from "../../../redux/movies/movies.actions";
import { MOVIES_FEATURE_KEY } from "../../../redux/movies/movies.reducer";
import Spinner from "../../root/spinner/Spinner";

let MovieList = () => {
  let userInfo = JSON.parse(localStorage.getItem("user"));
  let dispatch = useDispatch();
  let history = useHistory();
  let moviesInfo = useSelector((state) => {
    return state[MOVIES_FEATURE_KEY];
  });

  let { loading, movies } = moviesInfo;
  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="col">
          <p className="h3 text-info">Movie List</p>
        </div>
        <div className="row">
          {loading ? (
            <Spinner />
          ) : (
            <React.Fragment>
              {movies.length > 0 ? (
                <React.Fragment>
                  {movies.map((movie) => {
                    return (
                      <div className="row mt-3 col-md-3" key={movie._id}>
                        <div className="col" key={movie._id}>
                          <div className="card">
                            <div className="cardimage">
                              <img
                                src={movie.posterurl}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div className="card-body">
                              <div className="row">
                                <p className="h6 text-info">{movie.title}</p>

                                <p className="h6">{movie.releaseDate}</p>
                              </div>
                              <div className="row">
                                <div className="col">
                                  <ReactStars
                                    count={5}
                                    value={movie.imdbRating / 2}
                                    onChange={ratingChanged}
                                    size={24}
                                    activeColor="#ffd700"
                                  />
                                  ,
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div className="row">
                    <div className="col text-center">
                      <p className="h5 text-danger">
                        There is no Movies Available
                      </p>
                    </div>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
export default MovieList;
