<template>
  <form class="fx-form" @submit.prevent="onSubmit" @reset="onReset">
    <slot></slot>
  </form>
</template>

<script>
import { inArray, isUndefined } from '../helpers/util'
import groupMixin from '../util/group-mixin'

export default {
  name: 'fx-form',
  mixins: [groupMixin],
  provide() {
    return {
      appForm: this
    }
  },
  props: {
    rules: Object
  },
  methods: {
    onSubmit(e) {
      const inputEls = e.target.elements
      const value = {}
      const uids = []

      inputEls.forEach(el => {
        const _ac = el._app_component
        if (_ac) {
          // 主要用于排重checbox等多选的情况
          if (!inArray(_ac._uid, uids)) {
            // 获取配套表单组件
            uids.push(_ac._uid)
            if (_ac.formName || _ac.name) {
              value[_ac.formName || _ac.name] = _ac.hookFormValue
                ? _ac.hookFormValue()
                : _ac.formValue
            }
          }
        } else {
          // 原生组件
          if (el.name) {
            const { type, name, checked } = el

            if (type === 'checkbox') {
              // 数组类型
              if (!value[name]) {
                value[name] = []
              }

              if (checked) {
                value[name].push(el.value)
              }
            } else if (type === 'radio') {
              if (value[name] == null) {
                value[name] = ''
              }
              // 需要判断checked
              if (checked) {
                value[name] = el.value
              }
            } else if (type === 'select-multiple') {
              // 多项选择，不能直接获取值
              const selectOptions = el.options
              const selectedValues = []
              for (let i = 0; i < selectOptions.length; i++) {
                // 如果该option被选中，则将它的value存入数组
                if (selectOptions[i].selected) {
                  selectedValues.push(selectOptions[i].value)
                }
              }
              value[name] = selectedValues
            } else if (
              type === 'text' ||
              type === 'range' ||
              type === 'select-one' ||
              type === 'hidden'
            ) {
              // input
              value[name] = el.value
            }
          }
        }
      })

      this.$emit(e.type, {
        value
      })

      const validateEmit = valid => {
        const type = 'validate-submit'
        this.$emit(type, {
          valid,
          value
        })
      }

      this.validate(value)
        .then(() => {
          validateEmit(true)
        })
        .catch(() => {
          validateEmit(false)
        })

      return false
    },

    validate(value) {
      const retList = []

      this.childrenForEach($child => {
        if ($child.name && !isUndefined(value[$child.name])) {
          retList.push($child.validate(value[$child.name]))
        }
      })

      return Promise.all(retList)
    },

    onReset(e) {
      const inputEls = e.target.elements

      setTimeout(() => {
        const value = {}
        const uids = []

        inputEls.forEach(el => {
          const _ac = el._app_component

          if (
            _ac &&
            !inArray(_ac._uid, uids) // 主要用于排重checbox等多选的情况
          ) {
            // 获取配套表单组件
            uids.push(_ac._uid)

            if (_ac.reset) {
              _ac.reset()
            }

            if (_ac.formName || _ac.name) {
              value[_ac.formName || _ac.name] = _ac.hookFormValue
                ? _ac.hookFormValue()
                : _ac.formValue
            }
          } else {
            // 原生组件
          }
        })

        this.$emit(e.type, {
          value
        })
      }, 17)
    }
  }
}
</script>
