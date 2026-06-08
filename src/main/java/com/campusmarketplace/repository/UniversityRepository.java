package com.campusmarketplace.repository;

import com.campusmarketplace.entity.University;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UniversityRepository extends JpaRepository<University, Long> {
}
