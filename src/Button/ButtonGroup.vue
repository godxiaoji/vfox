<template>
  <div
    class="fx-button-group"
    :class="[
      'size--' + subOptions.size,
      'pattern--' + subOptions.pattern,
      'shape--' + subOptions.shape,
      'count--' + (appChildren.length || 1)
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
import groupMixin from '../util/group-mixin'
import { createEnumsValidator, getEnumsValue } from '../helpers/validator'

export default {
  name: 'fx-button-group',
  provide() {
    return {
      appButtonGroupSubOptions: this.subOptions,
      appButtonGroup: this
    }
  },
  mixins: [groupMixin],
  props: {
    size: {
      validator: createEnumsValidator('buttonSize'),
      default: null
    },
    pattern: {
      validator: createEnumsValidator('buttonPattern'),
      default: null
    },
    shape: {
      validator: createEnumsValidator('buttonShape'),
      default: null
    }
  },
  data() {
    return {
      subOptions: {
        pattern: '',
        size: '',
        shape: ''
      }
    }
  },
  watch: {
    size: {
      immediate: true,
      handler(newVal) {
        this.subOptions.size = getEnumsValue('buttonSize', newVal)
      }
    },
    pattern: {
      immediate: true,
      handler(newVal) {
        this.subOptions.pattern = getEnumsValue('buttonPattern', newVal)
      }
    },
    shape: {
      immediate: true,
      handler(newVal) {
        this.subOptions.shape = getEnumsValue('buttonShape', newVal)
      }
    }
  }
}
</script>
