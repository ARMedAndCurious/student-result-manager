package com.akshara.StudentResultManager;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class SubjectService {

    private final SubjectRepository subjectRepository;
    private final StudentRepository studentRepository;

    public Subject addSubject(Subject subject, Integer studentId) {
        Student student = studentRepository.findById(studentId)
                .orElseThrow(()-> new ResultNotFoundException("Student Not Found"));
        subject.setStudent(student);
        return subjectRepository.save(subject);
    }

    public List<Subject> findSubjectByStudentId(Integer studentId) {
        return subjectRepository.findByStudentId(studentId);
    }

    public Map<String, Object> getResult(Integer studentId) {
        Student student = studentRepository.findById(studentId)
                .orElseThrow(()-> new ResultNotFoundException("Student Not Found"));

        List<Subject> subjects = subjectRepository.findByStudentId(studentId);

        double totalObtained= subjects.stream()
                .mapToDouble(Subject:: getMarksObtained).sum();

        double totalMax = subjects.stream()
                .mapToDouble(Subject::getTotalMarks).sum();

        double percentage=(totalObtained*100)/totalMax;;

        Map<String, Object> result = new HashMap<>();
        result.put("studentName", student.getName());
        result.put("totalMarksObtained", totalObtained);
        result.put("totalMarks", totalMax);
        result.put("percentage", Math.round(percentage * 100.0) / 100.0);
        result.put("status", percentage >= 40 ? "PASS" : "FAIL");
        result.put("subjects", subjects);

        return result;
    }
}
