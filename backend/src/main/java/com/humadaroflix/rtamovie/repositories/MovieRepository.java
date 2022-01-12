package com.humadaroflix.rtamovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.humadaroflix.rtamovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
