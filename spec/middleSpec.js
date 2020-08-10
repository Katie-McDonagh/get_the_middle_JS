describe ("getMiddle", function(){

  it("returns 'A' when given 'A'", function() {
    
    expect(getMiddle("A")).toEqual ("A")
  })

  it("returns 't' when given 'testing'", function(){
    expect(getMiddle("testing")).toEqual("t")
  })

  it("returns 'of' when given 'of'", function(){
    expect(getMiddle('of')).toEqual("of")
  })
    
  it("returns 'dd' when given 'middle'", function(){
    expect(getMiddle('middle')).toEqual("dd")
  })

});
