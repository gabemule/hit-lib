<template>
    <div class="col"
        :class="[
            size && '-col-'+size,

            xxs && '-col-xxs-'+xxs,
            xs && '-col-xs-'+xs,
            md && '-col-md-'+md,
            lg && '-col-lg-'+lg,
            xl && '-col-xl-'+xl,
            xxl && '-col-xxl-'+xxl,

            offset && '-offset-'+offset,
            offsetXxs && '-offset-xxs-'+offsetXxs,
            offsetXs && '-offset-xs-'+offsetXs,
            offsetSm && '-offset-sm-'+offsetSm,
            offsetMd && '-offset-md-'+offsetMd,
            offsetLg && '-offset-lg-'+offsetLg,
            offsetXl && '-offset-xl-'+offsetXl,
            offsetXxl && '-offset-xxl-'+offsetXxl,

            border && '-full-border',
            borderTop && '-top-border',
            borderBottom && '-bottom-border',
            borderLeft && '-left-border',
            borderRight && '-right-border',

            hidden && '-hidden',
            hiddenXxs && '-hidden-xxs',
            hiddenXs && '-hidden-xs',
            hiddenSm && '-hidden-sm',
            hiddenMd && '-hidden-md',
            hiddenLg && '-hidden-lg',
            hiddenXl && '-hidden-xl',
            hiddenXxl && '-hidden-xxl',

            order && '-'+order+'-position',
        ]"
    >
        <slot/>
    </div>
</template>

<script>
    const Sizes = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    const Order = ['', 'first', 'last', 'middle'];

    export default {
        props: {
            size:           { type: String, default: '', validator(value) { return Sizes.indexOf(value) !== -1 } },

            xxs:            { type: String, default: '', validator(value) { return Sizes.indexOf(value) !== -1 } },
            xs:             { type: String, default: '', validator(value) { return Sizes.indexOf(value) !== -1 } },
            sm:             { type: String, default: '', validator(value) { return Sizes.indexOf(value) !== -1 } },
            md:             { type: String, default: '', validator(value) { return Sizes.indexOf(value) !== -1 } },
            lg:             { type: String, default: '', validator(value) { return Sizes.indexOf(value) !== -1 } },
            xl:             { type: String, default: '', validator(value) { return Sizes.indexOf(value) !== -1 } },
            xxl:            { type: String, default: '', validator(value) { return Sizes.indexOf(value) !== -1 } },

            offset:         { type: String, default: '', validator(value) { return Sizes.indexOf(value) !== -1 } },
            offsetXxs:      { type: String, default: '', validator(value) { return Sizes.indexOf(value) !== -1 } },
            offsetXs:       { type: String, default: '', validator(value) { return Sizes.indexOf(value) !== -1 } },
            offsetSm:       { type: String, default: '', validator(value) { return Sizes.indexOf(value) !== -1 } },
            offsetMd:       { type: String, default: '', validator(value) { return Sizes.indexOf(value) !== -1 } },
            offsetLg:       { type: String, default: '', validator(value) { return Sizes.indexOf(value) !== -1 } },
            offsetXl:       { type: String, default: '', validator(value) { return Sizes.indexOf(value) !== -1 } },
            offsetXxl:      { type: String, default: '', validator(value) { return Sizes.indexOf(value) !== -1 } },

            border:         { type: Boolean, default: false },
            borderTop:      { type: Boolean, default: false },
            borderBottom:   { type: Boolean, default: false },
            borderLeft:     { type: Boolean, default: false },
            borderRight:    { type: Boolean, default: false },

            hidden:         { type: Boolean, default: false },
            hiddenXxs:      { type: Boolean, default: false },
            hiddenXs:       { type: Boolean, default: false },
            hiddenSm:       { type: Boolean, default: false },
            hiddenMd:       { type: Boolean, default: false },
            hiddenLg:       { type: Boolean, default: false },
            hiddenXl:       { type: Boolean, default: false },
            hiddenXxl:      { type: Boolean, default: false },

            order:          { type: String, default: '', validator(value) { return Order.indexOf(value) !== -1 } }
        },
    }
</script>
