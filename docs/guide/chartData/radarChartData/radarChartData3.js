export default {
  series: [
    {
      value: [450, 50, 450, 50, 450, 50],
      dashed: true
    },
    {
      value: [50, 450, 50, 450, 50, 450],
      lineColor: '#9cf4df',
      fillColor: 'rgba(238, 233, 108, 0.5)'
    }
  ],
  label: {
    tags: ['西峡', '周口', '南阳', '驻马店', '郑州', '洛阳'],
    color: 'colors',
    fontSize: 10
  },
  rayLineType: 'dashed',
  rayLineColor: 'colors',
  ringNum: 5,
  ringType: 'polyline',
  ringFillType: 'cover',
  ringFillColor: ['rgba(61, 231, 201, 0.3)', 'rgba(61, 231, 201, 0.1)'],
  ringLineType: 'line',
  ringLineColor: 'rgba(156, 244, 233, 0.2)',
  rayLineOffset: Math.PI * -1.5,
  radius: 0.8,
  max: 550
}