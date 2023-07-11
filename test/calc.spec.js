describe('Számítás tesztelése', () => { 
    it('Sikeres teszt 1: lapátló: 30, eredmény: 9545.94', () => {     
        let actual = calcTerfogat(30);
        let expected = 9545.94;  
        expect(actual).toBeCloseTo(expected, 0.01);  
    });

    it('Sikeres teszt 2: lapátló 20, eredmény: 2828.42', () => {     
        let actual = calcTerfogat(20);
        let expected = 2828.42;  
        expect(actual).toBeCloseTo(expected, 0.01);  
    });
});