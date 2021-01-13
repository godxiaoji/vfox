<template>
  <button
    :class="[
      prefix + '-button',
      typeClassName,
      sizeClassName,
      patternClassName,
      shapeClassName,
      { 'has--icon': loading || icon, ghost: !!ghost }
    ]"
    :disabled="disabled"
    :type="realFormType"
    @click="onClick"
  >
    <icon v-if="loading" icon="LoadingOutlined" :spin="true" />
    <icon v-else-if="icon" :icon="icon" />
    <span><slot>按钮</slot></span>
  </button>
</template>

<script>
import Icon from '../Icon'
import { SDKKey } from '../config'
import { createEnumsValidator, getEnumsValue, iconValidator } from '../helpers/validator'

export default {
  name: SDKKey + '-button',
  components: { Icon },
  inject: {
    appButtonGroupSubOptions: {
      default: null
    },
    appButtonGroup: {
      default: null
    }
  },
  props: {
    size: {
      validator: createEnumsValidator('buttonSize'),
      default: null
    },
    type: {
      validator: createEnumsValidator('buttonType'),
      default: null
    },
    pattern: {
      validator: createEnumsValidator('buttonPattern'),
      default: null
    },
    shape: {
      validator: createEnumsValidator('buttonShape'),
      default: null
    },
    formType: {
      validator: createEnumsValidator('buttonFormType'),
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      validator: iconValidator,
      default: null
    },
    ghost: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      prefix: SDKKey
    }
  }, // 计算属性的 getter
  computed: {
    typeClassName() {
      return 'type--' + getEnumsValue('buttonType', this.type)
    },
    patternClassName() {
      return (
        'pattern--' +
        getEnumsValue(
          'buttonPattern',
          this.appButtonGroupSubOptions ? this.appButtonGroupSubOptions.pattern : this.pattern
        )
      )
    },
    sizeClassName() {
      return (
        'size--' +
        getEnumsValue('buttonSize', this.appButtonGroupSubOptions ? this.appButtonGroupSubOptions.size : this.size)
      )
    },
    shapeClassName() {
      return (
        'shape--' +
        getEnumsValue('buttonShape', this.appButtonGroupSubOptions ? this.appButtonGroupSubOptions.shape : this.shape)
      )
    },
    realFormType() {
      return getEnumsValue('buttonFormType', this.formType)
    }
  },
  created() {
    this.appButtonGroup && this.appButtonGroup.addButton(this._uid)
  },
  mounted() {
    this.$el._app_type = 'button'
  },
  destroyed() {
    this.appButtonGroup && this.appButtonGroup.removeButton(this._uid)
  },
  methods: {
    onClick(e) {
      this.$emit(e.type, e)
    }
  }
}
</script>