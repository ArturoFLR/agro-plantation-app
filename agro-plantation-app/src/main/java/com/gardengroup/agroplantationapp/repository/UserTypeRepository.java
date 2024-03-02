package com.gardengroup.agroplantationapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.gardengroup.agroplantationapp.entity.UserType;

import java.util.Optional;

@Repository
public interface UserTypeRepository extends JpaRepository<UserType,Long> {

   // @Query("SELECT u FROM UserType u WHERE u.type = :type")
   // public UserType findByType(@Param("type") String type);
    @Query("SELECT u FROM UserType u WHERE u.type = :type")
    Optional<UserType> findByType(@Param("type") String type);

}
