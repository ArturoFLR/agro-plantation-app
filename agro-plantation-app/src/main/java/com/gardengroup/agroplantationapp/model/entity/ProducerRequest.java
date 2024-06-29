package com.gardengroup.agroplantationapp.model.entity;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@Entity
@Table(name ="producer_request")
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class ProducerRequest {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(nullable = false)
    private User user;
    @Column(columnDefinition = "DATETIME")
    private Date date;
    @Column(length = 15, nullable = false)
    private String gardenName;
    @Column(length = 15, nullable = false)
    private String gardenSize;
    @Column(length = 50, nullable = false)
    private String gardenAddress;
    @Column(length = 140, nullable = false)
    private String description;
    @ManyToOne
    @JoinColumn(nullable = false)
    private StateRequest staterequest;
}
