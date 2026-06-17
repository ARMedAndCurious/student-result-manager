package com.akshara.StudentResultManager;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentService {

    private final StudentRepository studentRepository;

    public Student addStudent(@Valid Student student){
        return studentRepository.save(student);
    }
    
    public List<Student> getAllStudent(){
        return studentRepository.findAll();
    }
    
    public Student getStudentById(Integer id){
        return studentRepository.findById(id)
                .orElseThrow(()-> new ResultNotFoundException("Student not found with id "+id ));
    }

    public void deleteStudent(Integer id){
        studentRepository.deleteById(id);
    }
}
