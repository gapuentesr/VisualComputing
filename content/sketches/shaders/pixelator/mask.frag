precision mediump float;

uniform sampler2D texture;
varying vec2 texcoords2;

uniform float size;

void main() {
  float binsize = size;
  int si = int(texcoords2.x * binsize);
  int sj = int(texcoords2.y * binsize);  
  gl_FragColor = texture2D(texture, vec2(float(si) / binsize, float(sj) / binsize));  
}