/* Data dan penggambar grafik interaktif Latihan 5.4 (diambil dari grafik-5-4.html). */
const SOAL = [
  {
    no: 1, fx: "y = x² − 2x − 3", jenis: "Sketsa polinomial",
    f: x => Math.pow(x, 2) - 2*x - 3, view: [-2.8, 4.8, -5.21, 3.97], vas: [], has: [], obl: null,
    pts: [
      { x: 1.0, y: -4.0, k: "min", t: "(1, −4)" },
      { x: -1.0, y: 0.0, k: "sumbu", t: "(−1, 0)" },
      { x: 3.0, y: 0.0, k: "sumbu", t: "(3, 0)" },
      { x: 0.0, y: -3.0, k: "sumbu", t: "(0, −3)" }
    ]
  },
  {
    no: 2, fx: "y = 1 + x − x²", jenis: "Sketsa polinomial",
    f: x => -Math.pow(x, 2) + x + 1, view: [-1.12, 1.62, -0.5, 1.74], vas: [], has: [], obl: null,
    pts: [
      { x: 0.5, y: 1.25, k: "maks", t: "(1/2, 5/4)" },
      { x: -0.61803398875, y: 0.0, k: "sumbu", t: "(1/2 − √5/2, 0)" },
      { x: 1.61803398875, y: 0.0, k: "sumbu", t: "(1/2 + √5/2, 0)" },
      { x: 0.0, y: 1.0, k: "sumbu", t: "(0, 1)" }
    ]
  },
  {
    no: 3, fx: "y = x³ − 3x + 1", jenis: "Sketsa polinomial",
    f: x => Math.pow(x, 3) - 3*x + 1, view: [-3, 3, -4, 6], vas: [], has: [], obl: null,
    pts: [
      { x: -1.0, y: 3.0, k: "maks", t: "(−1, 3)" },
      { x: 1.0, y: -1.0, k: "min", t: "(1, −1)" },
      { x: 0.0, y: 1.0, k: "belok", t: "(0, 1), juga perpotongan sumbu" }
    ]
  },
  {
    no: 4, fx: "y = 2x³ − 3x² + 12x + 9", jenis: "Sketsa polinomial",
    f: x => 2*Math.pow(x, 3) - 3*Math.pow(x, 2) + 12*x + 9, view: [-1.12, 1.62, -3.58, 26.1], vas: [], has: [], obl: null,
    pts: [
      { x: 0.5, y: 14.5, k: "belok", t: "(1/2, 29/2)" },
      { x: 0.0, y: 9.0, k: "sumbu", t: "(0, 9)" }
    ]
  },
  {
    no: 5, fx: "y = x³ − 3x² + 3", jenis: "Sketsa polinomial",
    f: x => Math.pow(x, 3) - 3*Math.pow(x, 2) + 3, view: [-1.12, 3.12, -3.8, 5.8], vas: [], has: [], obl: null,
    pts: [
      { x: 0.0, y: 3.0, k: "maks", t: "(0, 3), juga perpotongan sumbu" },
      { x: 2.0, y: -1.0, k: "min", t: "(2, −1)" },
      { x: 1.0, y: 1.0, k: "belok", t: "(1, 1)" }
    ]
  },
  {
    no: 6, fx: "y = (x − 1)⁴", jenis: "Sketsa polinomial",
    f: x => Math.pow(x - 1, 4), view: [-1.5, 3.5, -0.83, 4.4], vas: [], has: [], obl: null,
    pts: [
      { x: 1.0, y: 0.0, k: "min", t: "(1, 0), juga perpotongan sumbu" },
      { x: 0.0, y: 1.0, k: "sumbu", t: "(0, 1)" }
    ]
  },
  {
    no: 7, fx: "y = (x − 1)⁵", jenis: "Sketsa polinomial",
    f: x => Math.pow(x - 1, 5), view: [-1.12, 2.12, -2.45, 1.45], vas: [], has: [], obl: null,
    pts: [
      { x: 1.0, y: 0.0, k: "belok", t: "(1, 0), juga perpotongan sumbu" },
      { x: 0.0, y: -1.0, k: "sumbu", t: "(0, −1)" }
    ]
  },
  {
    no: 8, fx: "y = x⁴ − 2x³ − 1", jenis: "Sketsa polinomial",
    f: x => Math.pow(x, 4) - 2*Math.pow(x, 3) - 1, view: [-1.12, 2.62, -3.29, 0.5], vas: [], has: [], obl: null,
    pts: [
      { x: 1.5, y: -2.6875, k: "min", t: "(3/2, −43/16)" },
      { x: 0.0, y: -1.0, k: "belok", t: "(0, −1), juga perpotongan sumbu" },
      { x: 1.0, y: -2.0, k: "belok", t: "(1, −2)" }
    ]
  },
  {
    no: 9, fx: "y = x⁴ − 2x² − 12", jenis: "Sketsa polinomial",
    f: x => Math.pow(x, 4) - 2*Math.pow(x, 2) - 12, view: [-2.6, 2.6, -15, 3], vas: [], has: [], obl: null, note: "Sketsa di PDF tidak berskala; grafik ini berskala sebenarnya.",
    pts: [
      { x: -1.0, y: -13.0, k: "min", t: "(−1, −13)" },
      { x: 0.0, y: -12.0, k: "maks", t: "(0, −12), juga perpotongan sumbu" },
      { x: 1.0, y: -13.0, k: "min", t: "(1, −13)" },
      { x: -0.57735026919, y: -12.555555555556, k: "belok", t: "(−√3/3, −113/9)" },
      { x: 0.57735026919, y: -12.555555555556, k: "belok", t: "(√3/3, −113/9)" }
    ]
  },
  {
    no: 10, fx: "y = x⁴ − 3x³ + 3x² + 1", jenis: "Sketsa polinomial",
    f: x => Math.pow(x, 4) - 3*Math.pow(x, 3) + 3*Math.pow(x, 2) + 1, view: [-1.12, 2.12, -0.5, 2.52], vas: [], has: [], obl: null,
    pts: [
      { x: 0.0, y: 1.0, k: "min", t: "(0, 1), juga perpotongan sumbu" },
      { x: 0.5, y: 1.4375, k: "belok", t: "(1/2, 23/16)" },
      { x: 1.0, y: 2.0, k: "belok", t: "(1, 2)" }
    ]
  },
  {
    no: 11, fx: "y = x⁵ − 4x⁴ + 4x³", jenis: "Sketsa polinomial",
    f: x => Math.pow(x, 5) - 4*Math.pow(x, 4) + 4*Math.pow(x, 3), view: [-1.0, 2.62, -0.53, 1.64], vas: [], has: [], obl: null,
    pts: [
      { x: 1.2, y: 1.10592, k: "maks", t: "(6/5, 3456/3125)" },
      { x: 2.0, y: 0.0, k: "min", t: "(2, 0), juga perpotongan sumbu" },
      { x: 0.0, y: 0.0, k: "belok", t: "(0, 0), juga perpotongan sumbu" },
      { x: 0.710102051443, y: 0.595762284286, k: "belok", t: "(6/5 − √6/5, 84√6/3125 + 1656/3125)" },
      { x: 1.689897948557, y: 0.464077715714, k: "belok", t: "(√6/5 + 6/5, 1656/3125 − 84√6/3125)" }
    ]
  },
  {
    no: 12, fx: "y = 3x⁵ − 5x³", jenis: "Sketsa polinomial",
    f: x => 3*Math.pow(x, 5) - 5*Math.pow(x, 3), view: [-1.94, 1.94, -2.88, 2.88], vas: [], has: [], obl: null,
    pts: [
      { x: -1.0, y: 2.0, k: "maks", t: "(−1, 2)" },
      { x: 1.0, y: -2.0, k: "min", t: "(1, −2)" },
      { x: -0.707106781187, y: 1.237436867076, k: "belok", t: "(−√2/2, 7√2/8)" },
      { x: 0.0, y: 0.0, k: "belok", t: "(0, 0), juga perpotongan sumbu" },
      { x: 0.707106781187, y: -1.237436867076, k: "belok", t: "(√2/2, −7√2/8)" },
      { x: -1.290994448736, y: 0.0, k: "sumbu", t: "(−√15/3, 0)" },
      { x: 1.290994448736, y: 0.0, k: "sumbu", t: "(√15/3, 0)" }
    ]
  },
  {
    no: 23, fx: "y = 2x / (x − 3)", jenis: "Sketsa fungsi rasional",
    f: x => 2*x/(x - 3), view: [-6.0, 9.0, -7.9, 23.23], vas: [3.0], has: [2.0], obl: null,
    pts: [
      { x: 0.0, y: 0.0, k: "sumbu", t: "(0, 0), juga perpotongan sumbu" }
    ]
  },
  {
    no: 24, fx: "y = x / (x² − 1)", jenis: "Sketsa fungsi rasional",
    f: x => x/(Math.pow(x, 2) - 1), view: [-7.0, 7.0, -3.0, 3.0], vas: [-1.0, 1.0], has: [0.0], obl: null,
    pts: [
      { x: 0.0, y: 0.0, k: "belok", t: "(0, 0), juga perpotongan sumbu" }
    ]
  },
  {
    no: 25, fx: "y = x² / (x² − 1)", jenis: "Sketsa fungsi rasional",
    f: x => Math.pow(x, 2)/(Math.pow(x, 2) - 1), view: [-7.0, 7.0, -2.5, 3.5], vas: [-1.0, 1.0], has: [1.0], obl: null,
    pts: [
      { x: 0.0, y: 0.0, k: "maks", t: "(0, 0), juga perpotongan sumbu" }
    ]
  },
  {
    no: 26, fx: "y = 1 / (x − 1)²", jenis: "Sketsa fungsi rasional",
    f: x => Math.pow(x - 1, -2), view: [-6.0, 7.0, -2.5, 3.5], vas: [1.0], has: [0.0], obl: null,
    pts: [
      { x: 0.0, y: 1.0, k: "sumbu", t: "(0, 1)" }
    ]
  },
  {
    no: 27, fx: "y = x / (1 + x²)", jenis: "Sketsa fungsi rasional",
    f: x => x/(Math.pow(x, 2) + 1), view: [-8.66, 8.66, -1.15, 1.15], vas: [], has: [0.0], obl: null,
    pts: [
      { x: -1.0, y: -0.5, k: "min", t: "(−1, −1/2)" },
      { x: 1.0, y: 0.5, k: "maks", t: "(1, 1/2)" },
      { x: -1.732050807569, y: -0.433012701892, k: "belok", t: "(−√3, −√3/4)" },
      { x: 0.0, y: 0.0, k: "belok", t: "(0, 0), juga perpotongan sumbu" },
      { x: 1.732050807569, y: 0.433012701892, k: "belok", t: "(√3, √3/4)" }
    ]
  },
  {
    no: 28, fx: "y = 1 − 1 / x", jenis: "Sketsa fungsi rasional",
    f: x => 1 - 1/x, view: [-6.0, 7.0, -2.46, 3.54], vas: [0.0], has: [1.0], obl: null,
    pts: [
      { x: 1.0, y: 0.0, k: "sumbu", t: "(1, 0)" }
    ]
  },
  {
    no: 29, fx: "y = (x − 1) / (x − 2)", jenis: "Sketsa fungsi rasional",
    f: x => (x - 1)/(x - 2), view: [-6.0, 8.0, -2.5, 3.5], vas: [2.0], has: [1.0], obl: null,
    pts: [
      { x: 1.0, y: 0.0, k: "sumbu", t: "(1, 0)" },
      { x: 0.0, y: 0.5, k: "sumbu", t: "(0, 1/2)" }
    ]
  },
  {
    no: 30, fx: "y = 1 / (x² + 1)", jenis: "Sketsa fungsi rasional",
    f: x => 1/(Math.pow(x, 2) + 1), view: [-6.58, 6.58, -0.65, 1.65], vas: [], has: [0.0], obl: null,
    pts: [
      { x: 0.0, y: 1.0, k: "maks", t: "(0, 1), juga perpotongan sumbu" },
      { x: -0.57735026919, y: 0.75, k: "belok", t: "(−√3/3, 3/4)" },
      { x: 0.57735026919, y: 0.75, k: "belok", t: "(√3/3, 3/4)" }
    ]
  },
  {
    no: 31, fx: "y = x² − 1 / x", jenis: "Asimtot berupa kurva",
    f: x => Math.pow(x, 2) - 1/x, view: [-6.79, 7.0, -2.05, 3.95], vas: [0.0], has: [], obl: null, ac: x => Math.pow(x, 2), act: "y = x²",
    pts: [
      { x: -0.793700525984, y: 1.889881574842, k: "min", t: "(−2^(2/3)/2, 3·2^(1/3)/2)" },
      { x: 1.0, y: 0.0, k: "belok", t: "(1, 0), juga perpotongan sumbu" }
    ]
  },
  {
    no: 32, fx: "y = (2x² − 1) / x²", jenis: "Sketsa fungsi rasional",
    f: x => (2*Math.pow(x, 2) - 1)/Math.pow(x, 2), view: [-6.71, 6.71, -2.0, 4.0], vas: [0.0], has: [2.0], obl: null,
    pts: [
      { x: -0.707106781187, y: 0.0, k: "sumbu", t: "(−√2/2, 0)" },
      { x: 0.707106781187, y: 0.0, k: "sumbu", t: "(√2/2, 0)" }
    ]
  },
  {
    no: 33, fx: "y = (1 − x) / x²", jenis: "Sketsa fungsi rasional",
    f: x => (1 - x)/Math.pow(x, 2), view: [-6.0, 9.0, -2.68, 3.32], vas: [0.0], has: [0.0], obl: null,
    pts: [
      { x: 2.0, y: -0.25, k: "min", t: "(2, −1/4)" },
      { x: 3.0, y: -0.222222222222, k: "belok", t: "(3, −2/9)" },
      { x: 1.0, y: 0.0, k: "sumbu", t: "(1, 0)" }
    ]
  },
  {
    no: 34, fx: "y = 8 / (4 − x²)", jenis: "Sketsa fungsi rasional",
    f: x => 8/(4 - Math.pow(x, 2)), view: [-10.0, 10.0, -6.1, 5.2], vas: [-2.0, 2.0], has: [0.0], obl: null,
    pts: [
      { x: 0.0, y: 2.0, k: "min", t: "(0, 2), juga perpotongan sumbu" }
    ]
  },
  {
    no: 35, fx: "y = (x − 1) / (x² − 4)", jenis: "Sketsa fungsi rasional",
    f: x => (x - 1)/(Math.pow(x, 2) - 4), view: [-10.0, 10.0, -3.36, 2.64], vas: [-2.0, 2.0], has: [0.0], obl: null,
    pts: [
      { x: 0.362165747256, y: 0.164864640797, k: "belok", t: "(x₀, f(x₀)) dengan 0 < x₀ < 1" },
      { x: 1.0, y: 0.0, k: "sumbu", t: "(1, 0)" },
      { x: 0.0, y: 0.25, k: "sumbu", t: "(0, 1/4)" }
    ]
  },
  {
    no: 36, fx: "y = 8(x − 2) / x²", jenis: "Sketsa fungsi rasional",
    f: x => (8*x - 16)/Math.pow(x, 2), view: [-12.0, 18.0, -4.0, 2.45], vas: [0.0], has: [0.0], obl: null,
    pts: [
      { x: 4.0, y: 1.0, k: "maks", t: "(4, 1)" },
      { x: 6.0, y: 0.888888888889, k: "belok", t: "(6, 8/9)" },
      { x: 2.0, y: 0.0, k: "sumbu", t: "(2, 0)" }
    ]
  },
  {
    no: 37, fx: "y = (x − 1)² / x²", jenis: "Sketsa fungsi rasional",
    f: x => Math.pow(x - 1, 2)/Math.pow(x, 2), view: [-6.0, 7.5, -1.45, 5.0], vas: [0.0], has: [1.0], obl: null,
    pts: [
      { x: 1.0, y: 0.0, k: "min", t: "(1, 0), juga perpotongan sumbu" },
      { x: 1.5, y: 0.111111111111, k: "belok", t: "(3/2, 1/9)" }
    ]
  },
  {
    no: 38, fx: "y = 2 + 3 / x − 1 / x³", jenis: "Sketsa fungsi rasional",
    f: x => 2 + 3/x - 1/Math.pow(x, 3), view: [-7.41, 7.41, -2.8, 6.8], vas: [0.0], has: [2.0], obl: null,
    pts: [
      { x: -1.0, y: 0.0, k: "min", t: "(−1, 0), juga perpotongan sumbu" },
      { x: 1.0, y: 4.0, k: "maks", t: "(1, 4)" },
      { x: -1.414213562373, y: 0.232233047034, k: "belok", t: "(−√2, 2 − 5√2/4)" },
      { x: 1.414213562373, y: 3.767766952966, k: "belok", t: "(√2, 5√2/4 + 2)" },
      { x: 0.5, y: 0.0, k: "sumbu", t: "(1/2, 0)" }
    ]
  },
  {
    no: 39, fx: "y = 3 − 4 / x − 4 / x²", jenis: "Sketsa fungsi rasional",
    f: x => 3 - 4/x - 4/Math.pow(x, 2), view: [-13.0, 12.0, -2.8, 6.8], vas: [0.0], has: [3.0], obl: null,
    pts: [
      { x: -2.0, y: 4.0, k: "maks", t: "(−2, 4)" },
      { x: -3.0, y: 3.888888888889, k: "belok", t: "(−3, 35/9)" },
      { x: -0.666666666667, y: 0.0, k: "sumbu", t: "(−2/3, 0)" },
      { x: 2.0, y: 0.0, k: "sumbu", t: "(2, 0)" }
    ]
  },
  {
    no: 40, fx: "y = (x² − 1) / (x² + 1)", jenis: "Sketsa fungsi rasional",
    f: x => (Math.pow(x, 2) - 1)/(Math.pow(x, 2) + 1), view: [-7.0, 7.0, -2.0, 2.0], vas: [], has: [1.0], obl: null,
    pts: [
      { x: 0.0, y: -1.0, k: "min", t: "(0, −1), juga perpotongan sumbu" },
      { x: -0.57735026919, y: -0.5, k: "belok", t: "(−√3/3, −1/2)" },
      { x: 0.57735026919, y: -0.5, k: "belok", t: "(√3/3, −1/2)" },
      { x: -1.0, y: 0.0, k: "sumbu", t: "(−1, 0)" },
      { x: 1.0, y: 0.0, k: "sumbu", t: "(1, 0)" }
    ]
  },
  {
    no: 42, fx: "y = (x² − 2) / x", jenis: "Asimtot miring",
    f: x => (Math.pow(x, 2) - 2)/x, view: [-7.41, 7.41, -3.0, 3.0], vas: [0.0], has: [], obl: [1.0, 0.0], oblt: "y = x",
    pts: [
      { x: -1.414213562373, y: 0.0, k: "sumbu", t: "(−√2, 0)" },
      { x: 1.414213562373, y: 0.0, k: "sumbu", t: "(√2, 0)" }
    ]
  },
  {
    no: 43, fx: "y = (x² − 2x − 3) / (x + 2)", jenis: "Asimtot miring",
    f: x => (Math.pow(x, 2) - 2*x - 3)/(x + 2), view: [-18.71, 17.47, -16.18, 5.71], vas: [-2.0], has: [], obl: [1.0, -4.0], oblt: "y = x − 4",
    pts: [
      { x: -4.2360679775, y: -10.472135955, k: "maks", t: "(−√5 − 2, −6 − 2√5)" },
      { x: 0.2360679775, y: -1.527864045, k: "min", t: "(−2 + √5, −6 + 2√5)" },
      { x: -1.0, y: 0.0, k: "sumbu", t: "(−1, 0)" },
      { x: 3.0, y: 0.0, k: "sumbu", t: "(3, 0)" },
      { x: 0.0, y: -1.5, k: "sumbu", t: "(0, −3/2)" }
    ]
  },
  {
    no: 44, fx: "y = (x − 2)³ / x²", jenis: "Asimtot miring",
    f: x => Math.pow(x - 2, 3)/Math.pow(x, 2), view: [-16.0, 14.0, -20.57, 7.08], vas: [0.0], has: [], obl: [1.0, -6.0], oblt: "y = x − 6",
    pts: [
      { x: -4.0, y: -13.5, k: "maks", t: "(−4, −27/2)" },
      { x: 2.0, y: 0.0, k: "belok", t: "(2, 0), juga perpotongan sumbu" }
    ]
  },
  {
    no: 45, fx: "y = (4 − x³) / x²", jenis: "Asimtot miring",
    f: x => (4 - Math.pow(x, 3))/Math.pow(x, 2), view: [-8.0, 6.0, -0.5, 8.86], vas: [0.0], has: [], obl: [-1.0, 0.0], oblt: "y = −x",
    pts: [
      { x: -2.0, y: 3.0, k: "min", t: "(−2, 3)" },
      { x: 1.587401051968, y: 0.0, k: "sumbu", t: "(2^(2/3), 0)" }
    ]
  },
  {
    no: 46, fx: "y = x + 1 − 1 / x − 1 / x²", jenis: "Asimtot miring",
    f: x => x + 1 - 1/x - 1/Math.pow(x, 2), view: [-11.0, 9.0, -3.89, 2.11], vas: [0.0], has: [], obl: [1.0, 1.0], oblt: "y = x + 1",
    pts: [
      { x: -1.0, y: 0.0, k: "maks", t: "(−1, 0), juga perpotongan sumbu" },
      { x: -3.0, y: -1.777777777778, k: "belok", t: "(−3, −16/9)" },
      { x: 1.0, y: 0.0, k: "sumbu", t: "(1, 0)" }
    ]
  },
  {
    no: 47, fx: "y = (x − 2)^(1 / 3)", jenis: "Pangkat rasional",
    f: x => Math.cbrt(x - 2), view: [-4, 8, -3, 3], vas: [], has: [], obl: null,
    pts: [
      { x: 2.0, y: 0.0, k: "tdd", t: "(2, 0), juga titik belok, juga perpotongan sumbu" },
      { x: 0.0, y: -1.259921049895, k: "sumbu", t: "(0, −2^(1/3))" }
    ]
  },
  {
    no: 50, fx: "y = x² + 1 / x", jenis: "Asimtot berupa kurva",
    f: x => Math.pow(x, 2) + 1/x, view: [-7.0, 6.79, -2.05, 3.95], vas: [0.0], has: [], obl: null, ac: x => Math.pow(x, 2), act: "y = x²",
    pts: [
      { x: 0.793700525984, y: 1.889881574842, k: "min", t: "(2^(2/3)/2, 3·2^(1/3)/2)" },
      { x: -1.0, y: 0.0, k: "belok", t: "(−1, 0), juga perpotongan sumbu" }
    ]
  },
  {
    no: 51, fx: "y = 3 − x² + 2 / x", jenis: "Asimtot berupa kurva",
    f: x => -Math.pow(x, 2) + 3 + 2/x, view: [-7.0, 8.0, -2.35, 5.35], vas: [0.0], has: [], obl: null, ac: x => 3 - Math.pow(x, 2), act: "y = 3 − x²",
    pts: [
      { x: -1.0, y: 0.0, k: "maks", t: "(−1, 0), juga perpotongan sumbu" },
      { x: 1.259921049895, y: 3.0, k: "belok", t: "(2^(1/3), 3)" },
      { x: 2.0, y: 0.0, k: "sumbu", t: "(2, 0)" }
    ]
  },
  {
    no: 52, fx: "y = 2x + 800 / x", jenis: "Asimtot miring",
    f: x => 2*x + 800/x, view: [-100.0, 100.0, -153.0, 153.0], vas: [0.0], has: [], obl: [2.0, 0.0], oblt: "y = 2x", note: "Dalam konteks soal, hanya bagian x > 0 yang dipakai.",
    pts: [
      { x: -20.0, y: -80.0, k: "maks", t: "(−20, −80)" },
      { x: 20.0, y: 80.0, k: "min", t: "(20, 80)" }
    ]
  },
  {
    no: 53, fx: "y = x² + 2000 / x", jenis: "Asimtot berupa kurva",
    f: x => Math.pow(x, 2) + 2000/x, view: [-57.8, 55.2, -322.06, 436.0], vas: [0.0], has: [], obl: null, ac: x => Math.pow(x, 2), act: "y = x²", note: "Dalam konteks soal, hanya bagian x > 0 yang dipakai.",
    pts: [
      { x: 10.0, y: 300.0, k: "min", t: "(10, 300)" },
      { x: -12.599210498949, y: 0.0, k: "belok", t: "(−10·2^(1/3), 0), juga perpotongan sumbu" }
    ]
  },
  {
    no: 54, fx: "y = x⁵(x − 1) / 10", jenis: "Sketsa polinomial",
    f: x => (1/10)*Math.pow(x, 5)*(x - 1), view: [-0.7, 1.3, -0.03, 0.05], vas: [], has: [], obl: null, note: "Sketsa di PDF tidak berskala; grafik ini berskala sebenarnya. Perbesar di sekitar 0 sampai 1.",
    pts: [
      { x: 0.833333333333, y: -0.006697959534, k: "min", t: "(5/6, −625/93312)" },
      { x: 0.0, y: 0.0, k: "belok", t: "(0, 0), juga perpotongan sumbu" },
      { x: 0.666666666667, y: -0.00438957476, k: "belok", t: "(2/3, −16/3645)" },
      { x: 1.0, y: 0.0, k: "sumbu", t: "(1, 0)" }
    ]
  },
  {
    no: 55, fx: "y = x⁵(x + 1)² / 10", jenis: "Sketsa polinomial",
    f: x => (1/10)*Math.pow(x, 5)*Math.pow(x + 1, 2), view: [-1.4, 0.45, -0.008, 0.008], vas: [], has: [], obl: null, note: "Sketsa di PDF tidak berskala; grafik ini berskala sebenarnya. Perbesar di sekitar −1 sampai 0.",
    pts: [
      { x: -1.0, y: 0.0, k: "maks", t: "(−1, 0), juga perpotongan sumbu" },
      { x: -0.714285714286, y: -0.001517832099, k: "min", t: "(−5/7, −1250/823543)" },
      { x: -0.898713492677, y: -0.00060146381, k: "belok", t: "x = −5/7 − √15/21 (nilai y tidak wajib dicari)" },
      { x: -0.529857935895, y: -0.000923114209, k: "belok", t: "x = −5/7 + √15/21 (nilai y tidak wajib dicari)" },
      { x: 0.0, y: 0.0, k: "belok", t: "(0, 0), juga perpotongan sumbu" }
    ]
  }
];
const NAMA = { maks: "maksimum relatif", min: "minimum relatif", belok: "titik belok", sumbu: "perpotongan sumbu", tdd: "tak dapat diturunkan" };
SOAL.forEach(s => s.pts.forEach(p => { if (p.y === null) p.y = s.f(p.x); }));

function css(name) { return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); }
function niceStep(range, px) {
  const raw = range / Math.max(2, px / 70), p = Math.pow(10, Math.floor(Math.log10(raw))), m = raw / p;
  return (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * p;
}
function fmt(v) {
  const a = Math.abs(v);
  if (a !== 0 && (a < 1e-3 || a >= 1e5)) return v.toExponential(2).replace("-", "−");
  return (Math.round(v * 1000) / 1000).toString().replace("-", "−").replace(".", ",");
}

function makePlot(s, box, readout) {
  const cv = document.createElement("canvas");
  box.prepend(cv);
  const ctx = cv.getContext("2d");
  let [x0, x1, y0, y1] = s.view;
  let W = 0, H = 0, dpr = 1;
  const X = x => (x - x0) / (x1 - x0) * W, Y = y => H - (y - y0) / (y1 - y0) * H;
  const IX = px => x0 + px / W * (x1 - x0), IY = py => y0 + (H - py) / H * (y1 - y0);

  function resize() {
    const r = box.getBoundingClientRect();
    dpr = window.devicePixelRatio || 1; W = r.width; H = r.height;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    // pertahankan rasio skala x:y sesuai bentuk kotak
    draw();
  }
  function draw() {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = css("--paper"); ctx.fillRect(0, 0, W, H);
    const sx = niceStep(x1 - x0, W), sy = niceStep(y1 - y0, H);
    ctx.lineWidth = 1; ctx.strokeStyle = css("--grid");
    ctx.beginPath();
    for (let g = Math.ceil(x0 / sx) * sx; g <= x1; g += sx) { ctx.moveTo(X(g), 0); ctx.lineTo(X(g), H); }
    for (let g = Math.ceil(y0 / sy) * sy; g <= y1; g += sy) { ctx.moveTo(0, Y(g)); ctx.lineTo(W, Y(g)); }
    ctx.stroke();
    // sumbu
    ctx.strokeStyle = css("--axis"); ctx.lineWidth = 1.2; ctx.beginPath();
    if (y0 < 0 && y1 > 0) { ctx.moveTo(0, Y(0)); ctx.lineTo(W, Y(0)); }
    if (x0 < 0 && x1 > 0) { ctx.moveTo(X(0), 0); ctx.lineTo(X(0), H); }
    ctx.stroke();
    // label angka sumbu
    ctx.fillStyle = css("--muted"); ctx.font = "11px " + css("--font-mono");
    const ay = Math.min(Math.max(Y(0), 12), H - 4), ax = Math.min(Math.max(X(0), 4), W - 40);
    ctx.textAlign = "center"; ctx.textBaseline = "top";
    for (let g = Math.ceil(x0 / sx) * sx; g <= x1; g += sx) if (Math.abs(g) > sx / 2) ctx.fillText(fmt(g), X(g), Math.min(ay + 3, H - 14));
    ctx.textAlign = "left"; ctx.textBaseline = "middle";
    for (let g = Math.ceil(y0 / sy) * sy; g <= y1; g += sy) if (Math.abs(g) > sy / 2) ctx.fillText(fmt(g), ax + 4, Y(g));
    // asimtot
    ctx.setLineDash([6, 5]); ctx.strokeStyle = css("--asym"); ctx.lineWidth = 1.3; ctx.beginPath();
    s.vas.forEach(a => { ctx.moveTo(X(a), 0); ctx.lineTo(X(a), H); });
    s.has.forEach(b => { ctx.moveTo(0, Y(b)); ctx.lineTo(W, Y(b)); });
    if (s.obl) { const [m, c] = s.obl; ctx.moveTo(0, Y(m * x0 + c)); ctx.lineTo(W, Y(m * x1 + c)); }
    if (s.ac) { for (let i = 0; i <= 400; i++) { const xx = x0 + (x1 - x0) * i / 400; i ? ctx.lineTo(X(xx), Y(s.ac(xx))) : ctx.moveTo(X(xx), Y(s.ac(xx))); } }
    ctx.stroke(); ctx.setLineDash([]);
    // kurva: sampel tiap 0,5 px, putus di asimtot tegak dan di luar layar jauh
    ctx.strokeStyle = css("--curve"); ctx.lineWidth = 2.2; ctx.lineJoin = "round"; ctx.beginPath();
    let pen = false, prevX = null;
    const n = Math.ceil(W * 2), lim = (y1 - y0) * 50;
    for (let i = 0; i <= n; i++) {
      const x = x0 + (x1 - x0) * i / n, y = s.f(x);
      const cross = prevX !== null && s.vas.some(a => (prevX - a) * (x - a) <= 0);
      if (!isFinite(y) || Math.abs(y - (y0 + y1) / 2) > lim || cross) { pen = false; prevX = x; continue; }
      if (!pen) { ctx.moveTo(X(x), Y(y)); pen = true; } else ctx.lineTo(X(x), Y(y));
      prevX = x;
    }
    ctx.stroke();
    // titik penting
    s.pts.forEach(p => {
      const px = X(p.x), py = Y(p.y);
      if (px < -10 || px > W + 10 || py < -10 || py > H + 10) return;
      ctx.beginPath(); ctx.arc(px, py, 5.5, 0, Math.PI * 2);
      ctx.fillStyle = css("--" + p.k); ctx.fill();
      ctx.lineWidth = 1.5; ctx.strokeStyle = css("--paper"); ctx.stroke();
    });
  }
  // interaksi: geser, zoom roda, cubit
  const ptrs = new Map(); let last = null, pinch = null;
  function zoomAt(px, py, k) {
    const cx = IX(px), cy = IY(py);
    x0 = cx + (x0 - cx) * k; x1 = cx + (x1 - cx) * k; y0 = cy + (y0 - cy) * k; y1 = cy + (y1 - cy) * k; draw();
  }
  cv.addEventListener("wheel", e => { e.preventDefault(); const r = cv.getBoundingClientRect(); zoomAt(e.clientX - r.left, e.clientY - r.top, e.deltaY > 0 ? 1.15 : 1 / 1.15); }, { passive: false });
  cv.addEventListener("pointerdown", e => { cv.setPointerCapture(e.pointerId); ptrs.set(e.pointerId, [e.clientX, e.clientY]); cv.classList.add("drag"); last = [e.clientX, e.clientY]; if (ptrs.size === 2) { const [a, b] = [...ptrs.values()]; pinch = Math.hypot(a[0] - b[0], a[1] - b[1]); } });
  cv.addEventListener("pointermove", e => {
    const r = cv.getBoundingClientRect(), mx = e.clientX - r.left, my = e.clientY - r.top;
    const xv = IX(mx), yv = s.f(xv);
    readout.textContent = "x = " + fmt(xv) + "   f(x) = " + (isFinite(yv) ? fmt(yv) : "tidak terdefinisi");
    if (!ptrs.has(e.pointerId)) return;
    ptrs.set(e.pointerId, [e.clientX, e.clientY]);
    if (ptrs.size === 2 && pinch) {
      const [a, b] = [...ptrs.values()], d = Math.hypot(a[0] - b[0], a[1] - b[1]);
      zoomAt((a[0] + b[0]) / 2 - r.left, (a[1] + b[1]) / 2 - r.top, pinch / d); pinch = d; return;
    }
    const dx = (e.clientX - last[0]) / W * (x1 - x0), dy = (e.clientY - last[1]) / H * (y1 - y0);
    x0 -= dx; x1 -= dx; y0 += dy; y1 += dy; last = [e.clientX, e.clientY]; draw();
  });
  const up = e => { ptrs.delete(e.pointerId); if (ptrs.size < 2) pinch = null; if (!ptrs.size) cv.classList.remove("drag"); else last = [...ptrs.values()][0]; };
  cv.addEventListener("pointerup", up); cv.addEventListener("pointercancel", up);
  new ResizeObserver(resize).observe(box);
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", draw);
  new MutationObserver(draw).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return {
    zoom: k => zoomAt(W / 2, H / 2, k),
    reset: () => { [x0, x1, y0, y1] = s.view; draw(); },
    jauh: () => zoomAt(W / 2, H / 2, 4)
  };
}

/* Pasang grafik interaktif satu soal 5.4 ke elemen el (dipakai halaman pembahasan). */
function pasangGrafik54(el, id) {
  const no = Number(String(id).replace("no-", ""));
  const s = SOAL.find(x => x.no === no);
  if (!s) { el.textContent = ""; return; }
  el.innerHTML = '<div class="g54-judul">Grafik interaktif: seret untuk menggeser, gulir atau cubit untuk memperbesar</div>' +
    '<div class="canvas-box"><div class="readout">arahkan kursor ke grafik</div></div>' +
    '<div class="g54-alat"><button type="button" data-g="in">Perbesar</button><button type="button" data-g="out">Perkecil</button>' +
    '<button type="button" data-g="far">Lihat jauh</button><button type="button" data-g="rs">Kembali ke awal</button></div>';
  const box = el.querySelector(".canvas-box"), P = makePlot(s, box, box.querySelector(".readout"));
  el.querySelector('[data-g="in"]').onclick = () => P.zoom(1 / 1.5);
  el.querySelector('[data-g="out"]').onclick = () => P.zoom(1.5);
  el.querySelector('[data-g="far"]').onclick = () => P.jauh();
  el.querySelector('[data-g="rs"]').onclick = () => P.reset();
}
