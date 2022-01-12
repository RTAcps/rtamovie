package com.humadaroflix.rtamovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.humadaroflix.rtamovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	User findByEmail(String email);

}
