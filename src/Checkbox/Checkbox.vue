<template>
  <label
    class="fx-checkbox fx-horizontal-hairline"
    :class="{ disabled: disabled2 }"
  >
    <input
      class="fx-checkbox_input"
      type="checkbox"
      :name="formName"
      :value="value"
      :disabled="disabled2"
      @change="onChange"
    />
    <div class="fx-checkbox_box">
      <icon
        class="fx-checkbox_icon"
        :icon="circle ? 'CircleOutlined' : 'BorderOutlined'"
      />
      <icon
        class="fx-checkbox_checked-icon"
        :icon="circle ? 'CheckCircleFilled' : 'CheckSquareFilled'"
      />
      <span class="fx-checkbox_text" v-if="$slots.default">
        <slot></slot>
      </span>
    </div>
  </label>
</template>

<script>
import Icon from '../Icon'
import { inArray, isStringNumberMix } from '../helpers/util'

export default {
  name: 'fx-checkbox',
  components: { Icon },
  inject: {
    appCheckboxGroup: {
      default: null
    }
  },
  props: {
    value: {
      validator: isStringNumberMix,
      default: ''
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    /* 优先接受来自分组的name */
    formName() {
      if (this.appCheckboxGroup) {
        return this.appCheckboxGroup.formName
      }

      return this.name || ''
    },
    disabled2() {
      if (this.appCheckboxGroup) {
        return this.appCheckboxGroup.disabled
      }

      return this.disabled
    }
  },
  model: {
    prop: 'checked',
    event: 'update:checked'
  },
  watch: {
    checked() {
      if (this.appCheckboxGroup) {
        return
      }

      const $input = this.getInputEl()
      const checked = !!this.checked

      if (checked !== $input.checked) {
        $input.checked = checked
      }
    }
  },
  created() {
    this.appCheckboxGroup && this.appCheckboxGroup.addChild(this)
  },
  mounted() {
    const $input = this.getInputEl()

    let checked
    if (this.appCheckboxGroup) {
      checked = inArray(this.value, this.appCheckboxGroup.modelValue)
    } else {
      checked = !!this.checked
    }

    if (checked !== $input.checked) {
      $input.defaultChecked = checked
      $input.checked = checked
    }

    $input._app_component = this.appCheckboxGroup || this
    $input._app_type = 'checkbox'
  },
  beforeDestroy() {
    this.appCheckboxGroup && this.appCheckboxGroup.removeChild(this)
  },
  methods: {
    onChange(e) {
      if (this.appCheckboxGroup) {
        this.appCheckboxGroup.onChange(this)
      } else {
        this.$emit('update:checked', e.target.checked)
      }
    },
    getInputEl() {
      return this.$el && this.$el.firstElementChild
    },
    getInputChecked() {
      return !!this.getInputEl().checked
    },
    setChecked(checked = true) {
      this.getInputEl().checked = checked
    }
  }
}
</script>
