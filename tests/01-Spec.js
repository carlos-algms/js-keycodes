describe( "Test is* methods", function (){

  it("is Number", function () {
    expect( KeyCodes.isNumber(50) )
          .toBe( true );
  });

  it("is Letter", function () {
    expect( KeyCodes.isLetter(67) )
          .toBe( true );
  });

  it("is Navigation", function () {
    expect( KeyCodes.isNavigation(38) )
          .toBe( true );
  });

  it("is white space", function () {
    expect( KeyCodes.isWhitespace(13) )
          .toBe( true );
  });

  it("is one of Fs", function () {
    expect( KeyCodes.isF1ToF12(121) )
          .toBe( true );
  });

});