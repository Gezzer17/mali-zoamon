import formatCurrency from "../../utils/formatCurrency.js";



describe('Format currency test',()=>
{
    it('Convert cents into dollars',()=>
    {
        expect(formatCurrency(2095)).toEqual(20.95);

    })
    it('Works with zero',()=>
    {
        expect(formatCurrency(0)).toEqual(0.00);
    })
    it('Rounds up to the neareast cent',()=>
        {
        expect(formatCurrency(2000.5)).toEqual(20.01);
        expect(formatCurrency(2000.4)).toEqual(20.00);
    });
})
