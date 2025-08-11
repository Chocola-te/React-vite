package com.reactapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.reactapp.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {

}