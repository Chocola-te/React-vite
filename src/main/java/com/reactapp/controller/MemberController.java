package com.reactapp.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.reactapp.Member;
import com.reactapp.repository.MemberRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/members")
@RequiredArgsConstructor
public class MemberController {

  @Autowired
  MemberRepository memberRepository;
  
                      // multipart/form-data 형식의 요청만 처리하도록 제한
  @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public ResponseEntity<Member> saveMember(
      @RequestParam("id") String id,
      @RequestParam("name") String name,
      @RequestParam("image") MultipartFile image,
      @RequestParam("phone") String phone,
      @RequestParam("address") String address,
      @RequestParam("role") String role) throws IOException {

    String uploadDir = new ClassPathResource("static/img").getFile().getAbsolutePath();
    String fileName = UUID.randomUUID() + "_" + image.getOriginalFilename();
    Path filePath = Paths.get(uploadDir, fileName);
    Files.write(filePath, image.getBytes());

    Member member = new Member();
    member.setId(id);
    member.setName(name);
    member.setImage("/img/" + fileName);
    member.setPhone(phone);
    member.setAddress(address);
    member.setRole(role);

    Member saved = memberRepository.save(member);
    return ResponseEntity.ok(saved);
  }

}