describe( "Test toString methods", function (){

  it("A number", function () {
    expect( KeyCodes.keyCodeToString(50) )
          .toBe( '2' );
  });

  it("A Letter", function () {
    expect( KeyCodes.keyCodeToString(67) )
          .toBe( 'C' );
  });

  it("A navigation", function () {
    expect( KeyCodes.keyCodeToString(38) )
          .toBe( 'UP' );
  });

  it("A white space", function () {
    expect( KeyCodes.keyCodeToString(9) )
          .toBe( 'TAB' );
  });

  it("A Fxx", function () {
    expect( KeyCodes.keyCodeToString(121) )
          .toBe( 'F10' );
  });

});