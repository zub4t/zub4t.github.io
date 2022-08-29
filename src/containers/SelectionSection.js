import React, { Component } from 'react'

class SelectionSection extends Component {
  constructor() {
    super()
    this.posfix = '%'
    this.width = 800
    this.height = 800
    this.increment = 50
    this.colors_of_box = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF']
    this.division = []
  }
  fn_boxes_creation() {
    let obj = document.querySelector('.SelectionSection')
    obj.style.width = `${this.width}px`
    obj.style.height = `${this.height}px`

    const boxes = []
    for (let i = 0; i < this.width; i += this.increment) {
      for (let j = 0; j < this.height; j += this.increment) {
        let box_number = this.width * (i / this.increment) + j / this.increment
        let obj = document.createElement('div')
        obj.style.width = `${this.increment}px`
        obj.style.height = `${this.increment}px`
        obj.classList.add('box')
        obj.setAttribute('box', box_number)
        boxes.push(obj)
        document.querySelector('.SelectionSection').append(obj)
      }
    }
    return boxes
  }
  fn_random_division_sum_based() {
    const limit = Math.pow(this.width / this.increment, 2)
    let total = this.division
      .map((a) => Math.pow(a, 2))
      .reduce(function (a, b) {
        return a + b
      }, 0)
    do {
      let aux = 0
      for (let i = 0; i < 10; i++) {
        aux = parseInt(Math.random() * 5)
        if (aux > 0) break
      }
      this.division.push(aux)

      total = this.division
        .map((a) => Math.pow(a, 2))
        .reduce(function (a, b) {
          return a + b
        }, 0)
    } while (total < limit)
    this.division.sort((a, b) => b - a)

    console.log(`sum of the area is ${total}`)
    console.log(this.division)
  }
  fn_random_division_percentage_based() {
    let remainder = 100
    for (let i in this.division) {
      if (i < this.division.length - 1) {
        let aux = 0
        aux = parseInt(Math.random() * remainder)
        if (aux <= 0) {
          for (let z = 0; z < 100; z++) {
            aux = parseInt(Math.random() * remainder)
            if (aux > 0) break
          }
        }
        this.division[i] = aux
        remainder -= aux
      } else {
        this.division[i] = remainder
      }
    }
    this.division.sort((a, b) => b - a)
    console.log(
      `% of area occupied: ${this.division.reduce((a, b) => a + b, 0)}`,
    )
    console.log(this.division)
  }
  fn_main_box_fill() {
    var that = this
    window.addEventListener('load', function () {
      console.log('[+]fn_main_box_fill')
      console.log('[+]All assets are loaded')
      const boxes = that.fn_boxes_creation()
      that.fn_random_division_percentage_based()

      for (let s = 0; s < 50; s++) {
        for (let d in that.division) {
          let nn = Math.ceil((that.division[d] / 100) * 16)
          for (let box_index in boxes) {
            if (boxes[box_index].getAttribute('selected') == undefined) {
              let fst_index = boxes[box_index].getAttribute('box')
              let lst_index = parseInt(fst_index) + nn + 800 * nn
              if (lst_index % 800 < 16) {
                // console.log(`fst_index ${fst_index} lst_index ${lst_index}`)
                let box_lst = document.querySelector(`[box='${lst_index}']`)
                if (box_lst == null) {
                  break
                }
                if (box_lst.getAttribute('selected') == null) {
                  console.log('CHOSEN')
                  for (let z = 0; z < nn; z++) {
                    for (let w = 0; w < nn; w++) {
                      let box_number = parseInt(fst_index) + w + 800 * z
                      try {
                        let obj = document.querySelector(
                          `[box='${box_number}']`,
                        )
                        obj.style.background = that.colors_of_box[d]
                        obj.setAttribute('selected', 'true')
                      } catch (e) {}
                    }
                  }

                  break
                }
              } else {
                let box_number = parseInt(fst_index)
                let obj = document.querySelector(`[box='${box_number}']`)
                obj.style.background = that.colors_of_box[d]
              }
            }
          }
        }
      }
    })
  }
  fn_to_color(obj, color) {
    obj.style.background = color
  }
  fn_main_box_fill_v1() {
    var that = this
    window.addEventListener('load', function () {
      console.log('[+]fn_main_box_fill')
      console.log('[+]All assets are loaded')
      const boxes = that.fn_boxes_creation()
      that.fn_random_division_sum_based()

      for (let i = 0; i < that.division.length; i++) {
        let size = that.division[i]
        //  console.log(`size ${size}`)
        for (let box_index in boxes) {
          if (boxes[box_index].getAttribute('selected') == undefined) {
            let fst_index = boxes[box_index].getAttribute('box')
            let lst_index = parseInt(fst_index) + (size - 1) + 800 * (size - 1)
            if (lst_index % 800 < 16) {
              let box_lst = document.querySelector(`[box='${lst_index}']`)
              if (box_lst == null) {
                break
              }
              let f = false
              if (box_lst.getAttribute('selected') == null) {
                for (let z = 0; z < size; z++) {
                  for (let w = 0; w < size; w++) {
                    let box_number = parseInt(fst_index) + w + 800 * z
                    let obj = document.querySelector(`[box='${box_number}']`)
                    if (obj.getAttribute('selected') != null) {
                      f = true
                      break
                    }
                  }
                  if (f) break
                }
                if (f) continue
                // console.log(`fst_index ${fst_index} lst_index ${lst_index}`)
                const color = `#${Math.floor(
                  Math.random() * 16777000 + 215,
                ).toString(16)}`
                for (let z = 0; z < size; z++) {
                  for (let w = 0; w < size; w++) {
                    let box_number = parseInt(fst_index) + w + 800 * z
                    try {
                      let obj = document.querySelector(`[box='${box_number}']`)
                      obj.setAttribute('selected', 'true')
                      setTimeout(that.fn_to_color, (i+10) * 100, obj, color)
                      
                    } catch (e) {}
                  }
                }
                break
              }
            }
          }
        }
      }
    })
  }

  render() {
    //  this.fn_main_box_fill()
    this.fn_main_box_fill_v1()
    return (
      <div className="SelectionSection mdc-layout-grid__cell--span-12 fade-in-image-25 "></div>
    )
  }
}

export default SelectionSection
