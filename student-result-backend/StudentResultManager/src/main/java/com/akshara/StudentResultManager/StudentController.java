package com.akshara.StudentResultManager;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/students")
@CrossOrigin(origins = {
        "http://localhost:5173",
        "http://localhost:5174"
})
public class StudentController {

    private final StudentService studentService;

    @PostMapping
    public ResponseEntity<Student> addStudent(@RequestBody Student student){
        return ResponseEntity.status(201).body(studentService.addStudent(student));
    }

    @GetMapping
    public ResponseEntity<List<Student>> findStudents(){
        return ResponseEntity.ok(studentService.getAllStudent());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudent(@PathVariable Integer id){
        return  ResponseEntity.ok(studentService.getStudentById(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStudent(@PathVariable Integer id){
        studentService.deleteStudent(id);
        return ResponseEntity.noContent().build();
    }

}
