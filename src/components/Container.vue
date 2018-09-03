<template>
    <section class="hit-container"
        :class="[
            noGap && '-no-full-gap',
            noEdges && '-no-edges-gap',
            fixedWidth && '-fixed-width',
        ]"
    >
        <slot/>
    </section>
</template>

<script>
    export default {
        props: {
            noGap:      { type: Boolean, default: false },
            noEdges:    { type: Boolean, default: false },
            fixedWidth: { type: Boolean, default: false },
        }
    }
</script>

<style lang="scss">
    @import './../assets/sass/variables/grid.scss';

    .hit-container {
        padding-right: $half-gutter;
        padding-left: $half-gutter;
        margin-bottom: $grid-gutter;
        overflow: hidden;
        .-bg-1{
            background: $gray-2;
        }
        .-bg-2{
            background: $gray-1;
        }

        &.-no-edges-gap {
            overflow: hidden;
            .row {
                margin-right: -$half-gutter;
                margin-left: -$half-gutter;
            }
        }

        &.-fixed-width {
            max-width: $grid-container-maxWidth;
            margin-right: auto;
            margin-left: auto;
        }

        &.-no-full-gap {
            .col {
                padding: 0;
            }
        }


        &.-horizontal-gap {
            padding-top: $grid-gutter;
            padding-bottom: $grid-gutter;
        }

        &.-vertical-gap {
            padding-right: $half-gutter;
            padding-left: $half-gutter;
            .col {
                padding: $grid-verticalGap-col;
            }
        }

        .row .hit-container .col,
        .row .col {
            &.-noGap {
                margin: 0;
                padding: 0;
            }
        }
    }

    .row {
        // Row
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        box-sizing: border-box;
        margin: 0;

        * {
            box-sizing: border-box;
        }

        > .col {
            flex: 1;
            flex-grow: 1;
            flex-basis: 0;
            padding: $half-gutter;
            margin-bottom: 0;
            width: 100%;

            @media ( max-width :$screen-sm ){
                min-width: 100%;
            }

            // Cols settings
            &[class*='-col'] {
                flex: none;
                width: 100%;
            }

            &[class*='-xxs'],
            &[class*='-xs'],
            &[class*='-sm'],
            &[class*='-md'],
            &[class*='-lg'],
            &[class*='-xl'] {
                flex: 1;
                width: auto;
            }

            // Grid columns based cols (12)
            @for $i from 0 through $grid-columns {
                &.-col-#{$i} {
                    @include media('sm') {
                        min-width: auto;
                    }
                    width: ((100% * $i) / $grid-columns);
                    min-width: 100%;
                    flex: 0 0 ((100% * $i) / $grid-columns);
                    height: 100%;
                }
                &.-offset-#{$i} {
                    margin-left: ((100% * $i) / $grid-columns);
                }
            }
        }

        /**
        Modifiers
        */

        // Padding
        &.-spacing-sm {
            .col {
                padding: $half-gutter-sm;
            }
        }

        //Margin
        &.-top-small-margin {
            margin-top: $grid-marginTopSmall;
        }

        &.-top-margin {
            margin-top: $grid-marginTop;
        }

        &.-top-large-margin {
            margin-top: $grid-marginTopLarge;
        }

        &.-bottom-small-margin {
            margin-bottom: $grid-marginBottomSmall;
        }

        &.-bottom-margin {
            margin-bottom: $grid-marginBottom;
        }

        &.-bottom-large-margin {
            margin-bottom: $grid-marginBottomLarge;
        }

        @media ( min-width: $screen-md ) {
            &.-top-small-margin {
                margin-top: $grid-marginTopSmall-md;
            }

            &.-top-margin {
                margin-top: $grid-marginTop-md;
            }

            &.-top-large-margin {
                margin-top: $grid-marginTopLarge-md;
            }

            &.-bottom-small-margin {
                margin-bottom: $grid-marginBottomSmall-md;
            }

            &.-bottom-margin {
                margin-bottom: $grid-marginBottom-md;
            }

            &.-bottom-large-margin {
                margin-bottom: $grid-marginBottomLarge-md;
            }

            .hit-container.-no-Edges-gap .row {
                margin-right: -($grid-gutter + $half-gutter);
                margin-left: -($grid-gutter + $half-gutter);
            }

            .hit-container.-vertical-gap .col {
                padding: $grid-verticalGap-col-md;
            }

        }

        //VerticalAlign
        &.-v-middle-align {
            align-items: center;
        }

        &.-v-bottom-align {
            align-items: flex-end;
        }

        //Align
        &.-center, .col.-center  {
            text-align: center;
        }

        &.-right, .col.-right {
            text-align: right;
        }

        @media ( max-width :$screen-xxs ) {
            .-center-xxs, .col.-center-xxs {
                text-align: center;
            }
            .-right-xxs, .col.-right-xxs {
                text-align: right;
            }
        }

        @media ( min-width :$screen-xxs ) and ( max-width :$screen-xs ) {
            .-center-xs, .col.-center-xs {
                text-align: center;
            }
            .-right-xs, .col.-right-xs {
                text-align: right;
            }
        }

        @media ( min-width :$screen-xs ) and ( max-width :$screen-sm ) {
            .-center-sm, .col.-center-sm {
                text-align: center;
            }
            .-right-sm, .col.-right-sm {
                text-align: right;
            }
        }

        @media ( min-width :$screen-sm ) and ( max-width :$screen-md ) {
            .-center-md, .col.-center-md {
                text-align: center;
            }
            .-right-md, .col.-right-md {
                text-align: right;
            }
        }

        @media ( min-width :$screen-md ) and ( max-width :$screen-lg ) {
            .-center-lg, .col.-center-lg {
                text-align: center;
            }
            .-right-lg, .col.-right-lg {
                text-align: right;
            }
        }

        @media ( min-width :$screen-lg ) {
            .-center-xl, .col.-center-xl {
                text-align: center;
            }
            .-right-xl, .col.-right-xl {
                text-align: right;
            }
        }


        //Reverse
        &.-row-reverse {
            flex-direction: row-reverse;
        }

        &.-col-reverse {
            flex-direction: column-reverse;
        }

        //Fixed
        &.-fixed .col{
            min-width: auto;
            width: auto;
        }

        //Order
        .col.-first-position{
            order:-1;
        }

        .col.-unordered-position{
            order:0;
        }

        .col.-last-position{
            order:1;
        }

        //Border
        &.-bottom-border, .-bottom-border.col{
            box-shadow: $grid-border-bottom;
        }

        &.-top-border,.-top-border.col{
            box-shadow: $grid-border-top;
        }

        &.-right-border, .-right-border.col{
            box-shadow: $grid-border-right;
        }

        &.-left-border, .-left-border.col{
            box-shadow: $grid-border-left;
        }
        &.-full-border, .-full-border.col{
            box-shadow: $grid-border;
        }

        //isHidden

        @media ( max-width :$screen-xxs ) {
            .col.-hidden-xxs {
                display: none;
            }
        }

        @media ( min-width :$screen-xxs ) and ( max-width :$screen-xs ) {
            .col.-hidden-xs {
                display: none;
            }
        }

        @media ( min-width :$screen-xs ) and ( max-width :$screen-sm ) {
            .col.-hidden-sm {
                display: none;
            }
        }

        @media ( min-width :$screen-sm ) and ( max-width :$screen-md ) {
            .col.-hidden-md {
                display: none;
            }
        }

        @media ( min-width :$screen-md ) and ( max-width :$screen-lg ) {
            .col.-hidden-lg {
                display: none;
            }
        }

        @media ( min-width :$screen-lg ) {
            .col.-hidden-xl {
                display: none;
            }
        }

        //Distribution
        &.-center{
            justify-content: center;
        }

        &.-start{
            justify-content: flex-start;
        }

        &.-end{
            justify-content: flex-end;
        }

        &.-around{
            justify-content: space-around;
        }

        &.-between{
            justify-content: space-between;
        }

        //Column Sizes by breakpoint

        @for $i from 1 through $grid-columns {
            .col.-col-xxs-#{$i} {
                flex: 0 0 ((100% * $i) / $grid-columns);
                max-width: ((100% * $i) / $grid-columns);
                min-width: inherit;
            }
        }

        @for $i from 1 through $grid-columns {
            @media ( min-width :$screen-xxs ) {
                .col.-col-xs-#{$i} {
                    max-width: ((100% * $i) / $grid-columns);
                    min-width: inherit;
                    flex: 0 0 ((100% * $i) / $grid-columns);
                }
            }
        }

        @for $i from 1 through $grid-columns {
            @media ( min-width :$screen-xs ) {
                .col.-col-sm-#{$i} {
                    min-width: inherit;
                    flex: 0 0 ((100% * $i) / $grid-columns);
                    max-width: ((100% * $i) / $grid-columns);
                }
            }
        }

        @for $i from 1 through $grid-columns {
            @media ( min-width :$screen-sm ) {
                .col.-col-md-#{$i} {
                    min-width: inherit;
                    flex: 0 0 ((100% * $i) / $grid-columns);
                    max-width: ((100% * $i) / $grid-columns);
                }
            }
        }

        @for $i from 1 through $grid-columns {
            @media ( min-width :$screen-md ) {
                .col.-col-lg-#{$i} {
                    min-width: inherit;
                    flex: 0 0 ((100% * $i) / $grid-columns);
                    max-width: ((100% * $i) / $grid-columns);
                }
            }
        }

        @for $i from 1 through $grid-columns {
            @media ( min-width :$screen-lg ) {
                .col.-col-xl-#{$i} {
                    min-width: inherit;
                    flex: 0 0 ((100% * $i) / $grid-columns);
                    max-width: ((100% * $i) / $grid-columns);
                }
            }
        }

        //Offsets

        @for $i from 0 through $grid-columns {
            .col.-offset-xxs-#{$i} {
                margin-left: ((100% * $i) / $grid-columns);
            }
        }

        @for $i from 0 through $grid-columns {
            @media ( min-width :$screen-xxs ) {
                .col.-offset-xs-#{$i} {
                    margin-left: ((100% * $i) / $grid-columns);
                }
            }
        }

        @for $i from 0 through $grid-columns {
            @media ( min-width :$screen-xs ) {
                .col.-offset-sm-#{$i} {
                    margin-left: ((100% * $i) / $grid-columns);
                }
            }
        }

        @for $i from 0 through $grid-columns {
            @media ( min-width :$screen-sm ) {
                .col.-offset-md-#{$i} {
                    margin-left: ((100% * $i) / $grid-columns);
                }
            }
        }

        @for $i from 0 through $grid-columns {
            @media ( min-width :$screen-md ) {
                .col.-offset-lg-#{$i} {
                    margin-left: ((100% * $i) / $grid-columns);
                }
            }
        }

        @for $i from 0 through $grid-columns {
            @media ( min-width :$screen-lg ) {
                .col.-offset-xl-#{$i} {
                    margin-left: ((100% * $i) / $grid-columns);
                }
            }
        }
    }
</style>