precision mediump float;

// uniforms are defined and sent by the sketch
uniform sampler2D texture;
uniform int tool;

// interpolated texcoord (same name and type as in vertex shader)
varying vec2 texcoords2;

float luma(vec3 texel) {
  return 0.299 * texel.r + 0.587 * texel.g + 0.114 * texel.b;
}

float hsl(vec3 texel) {
  float maxRG = max(texel.r, texel.g);
  float maxRGB = max(maxRG, texel.b);
  float minRG = min(texel.r, texel.g);
  float minRGB = min(minRG, texel.b);
  return (maxRGB + minRGB) / 2.0;
}

float hsv(vec3 texel) {
  float maxRG = max(texel.r, texel.g);
  float maxRGB = max(maxRG, texel.b);
  return maxRGB;
}

float avg(vec3 texel) {
  return (texel.r + texel.g + texel.b)/3.0;
}


void main() {
  // texture2D(texture, texcoords2) samples texture at texcoords2 
  // and returns the normalized texel color
  vec4 texel = texture2D(texture, texcoords2);

  if (tool == 1){
    gl_FragColor = vec4((vec3(luma(texel.rgb))), 1.0);
  }
  else if (tool == 2){
    gl_FragColor = vec4((vec3(hsl(texel.rgb))), 1.0);
  }
  else if (tool == 3){
    gl_FragColor = vec4((vec3(hsv(texel.rgb))), 1.0);
  }
  else if (tool == 4){
    gl_FragColor = vec4((vec3(avg(texel.rgb))), 1.0);
  }
  else{
    gl_FragColor = vec4((vec3(texel.rgb)), 1.0);
  }
}