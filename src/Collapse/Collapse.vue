<template>
  <div class="fx-collapse">
    <slot></slot>
  </div>
</template>

<script>
import { cloneData, isArray, inArray, isSameArray } from '../helpers/util'
import { arrayValueValidator } from '../helpers/validator'
import groupMixin from '../util/group-mixin'

export default {
  name: 'fx-collapse',
  mixins: [groupMixin],
  provide() {
    return {
      appCollapse: this
    }
  },
  props: {
    activeNames: {
      validator: arrayValueValidator,
      default() {
        return []
      }
    },
    accordion: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeNames2: []
    }
  },
  watch: {
    activeNames(val) {
      this.updateValue(val)
    }
  },
  mounted() {
    this.updateValue(this.activeNames)
  },
  methods: {
    updateValue(val) {
      if (isArray(val) && isSameArray(val, this.activeNames2)) {
        return
      }

      let values = arrayValueValidator(val) ? (isArray(val) ? val : [val]) : []

      if (this.accordion) {
        // 手风琴模式只保留一个值
        values = values.slice(0, 1)
      }
      values = cloneData(values)

      const activeNames = []

      this.childrenForEach(child => {
        if (child.name && inArray(child.name, values)) {
          activeNames.push(child.name)
          child.show()
        } else {
          child.hide()
        }
      })

      this.activeNames2 = activeNames
    },

    onChange({ _uid, name, active }) {
      let activeNames = []

      if (this.accordion) {
        activeNames = name && active ? [name] : []

        if (active) {
          this.childrenForEach(child => {
            if (child._uid !== _uid) {
              child.hide()
            }
          })
        }
      } else {
        this.childrenForEach(child => {
          if (child.active && child.name) {
            activeNames.push(child.name)
          }
        })
      }

      this.activeNames2 = activeNames
      this.$emit('update:activeNames', cloneData(activeNames))
      this.$emit('change', {
        activeNames: cloneData(activeNames)
      })
    }
  }
}
</script>
