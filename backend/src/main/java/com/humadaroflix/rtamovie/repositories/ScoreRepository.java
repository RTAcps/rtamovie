package com.humadaroflix.rtamovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.humadaroflix.rtamovie.entities.Score;
import com.humadaroflix.rtamovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
