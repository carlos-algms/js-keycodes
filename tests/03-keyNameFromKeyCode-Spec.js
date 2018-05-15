describe( "Test get KeyName from KeyCode", function (){

  it("A number", function () {
    expect( KeyCodes.getKeyNameFromKeyCode(55) )
          .toBe( 'SEVEN' );
  });

  it("A Letter", function () {
    expect( KeyCodes.getKeyNameFromKeyCode(90) )
          .toBe( 'Z' );
  });

  it("A navigation", function () {
    expect( KeyCodes.getKeyNameFromKeyCode(38) )
          .toBe( 'UP' );
  });

  it("A white space", function () {
    expect( KeyCodes.getKeyNameFromKeyCode(9) )
          .toBe( 'TAB' );
  });

  it("A Fxx", function () {
    expect( KeyCodes.getKeyNameFromKeyCode(121) )
          .toBe( 'F10' );
  });

});