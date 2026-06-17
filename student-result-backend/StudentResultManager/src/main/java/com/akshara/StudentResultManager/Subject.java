package com.akshara.StudentResultManager;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Subject {

    @Id
    @GeneratedValue
    private Integer id;

    private String name;

    private double marksObtained;

    private double totalMarks;


    @ManyToOne
    @JoinColumn(name ="student_id")
    @JsonBackReference
    private Student student;
}
