package com.akshara.StudentResultManager;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/students/{studentId}/subjects")
@CrossOrigin("http://localhost:5174")
public class SubjectController {

    private final  SubjectService subjectService;


    @PostMapping
    public ResponseEntity<Subject> addSubject(  @RequestBody Subject subject,
                                                @PathVariable Integer studentId) {

        return ResponseEntity.status(201).body(subjectService.addSubject(subject, studentId));
    }

    @GetMapping
    public ResponseEntity<List<Subject>> getAllSubjects(@PathVariable Integer studentId) {
        return ResponseEntity.ok(subjectService.findSubjectByStudentId(studentId));
    }

    @GetMapping("/{result}")
    public ResponseEntity<Map<String, Object>> getResult(@PathVariable Integer studentId) {
        return ResponseEntity.ok(subjectService.getResult(studentId));
    }
}
