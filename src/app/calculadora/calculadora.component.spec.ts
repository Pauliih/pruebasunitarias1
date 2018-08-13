import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CalculadoraComponent } from "./calculadora.component";

describe("CalculadoraComponent", () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;
  let calculator;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalculadoraComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    //Arrage - Preparar
    calculator = new CalculadoraComponent();

    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("Test for multiply", () => {
    it("should return nine", () => {
      // Act - Actuar
      let result = calculator.multiply(3, 3);
      // Assert - Verificar
      expect(result).toEqual(9);
    });

    it("should return four", () => {
      // Act - Actuar
      let result = calculator.multiply(1, 4);
      // Assert - Verificar
      expect(result).toEqual(4);
    });
  });

  fdescribe("Test for divide", () => {
    it("should return one", () => {
      // Act - Actuar y Assert - Verificar
      expect(calculator.divide(3, 3)).toEqual(1);
      expect(calculator.divide(9, 9)).toEqual(1);
      expect(calculator.divide(80, 80)).toEqual(1);
    });

    fit("should return null", () => {
      // Act - Actuar y Assert - Verificar
      expect(calculator.divide(8, 0)).toBeNull();
      expect(calculator.divide(4, 0)).toBeNull();
      expect(calculator.divide(2, 0)).toBeNull();
    });
  });

  it("Test of matchers", ()=>{
    let name = 'Paula';
    let name2;
    expect(name).toBeDefined();
    expect(name2).toBeUndefined();
  
    expect(1+2 == 3).toBeTruthy();
    expect(1+1 == 3).toBeFalsy();
  
    expect(5).toBeLessThan(10);
    expect(20).toBeGreaterThan(10);
  
    expect('1234567').toMatch(/123/);
  
    expect(["apples", "oranges", "pears"]).toContain("oranges")
  });
});
