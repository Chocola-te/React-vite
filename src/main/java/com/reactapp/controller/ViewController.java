package com.reactapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import com.reactapp.Member;
import com.reactapp.repository.MemberRepository;


@Controller
public class ViewController {

  @Autowired
  MemberRepository memberRepository;

  @ResponseBody
  @GetMapping("/api/members")
  public List<Member> getAllMembers() {
    return memberRepository.findAll();
  }

  @DeleteMapping("/api/members/delete/{idNo}")
  public ResponseEntity<Long> deleteMember(@PathVariable("idNo") Long idNo) {
    memberRepository.deleteById(idNo);
    return ResponseEntity.ok().build();
  }  

}
