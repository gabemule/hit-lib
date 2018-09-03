import { storiesOf } from "@storybook/vue";
import { withInfo } from "storybook-addon-vue-info";
import { withKnobs } from "@storybook/addon-knobs/vue";
import { withOptions } from "@storybook/addon-options";

import Components from "@/components/index";

storiesOf("Hit Grid", module)
  .addDecorator(withKnobs)
  .addDecorator(withOptions)

  .addParameters({ options: { showAddonPanel: false } })
  .add(
    "Basic",
    withInfo({
      summary: "Basic"
    })(() => ({
      components: { ...Components },
      template: ` 
                    <div>
                        <hit-container>
                            <hit-row>
                                <hit-col class="-bg-1"> 1 col </hit-col>
                            </hit-row>
                        </hit-container>
                        
                        <hit-container>
                            <hit-row>
                                <hit-col class="-bg-1"> 2 col </hit-col>
                                <hit-col class="-bg-2"> 2 col </hit-col>
                            </hit-row>
                        </hit-container>
                        
                        <hit-container>
                            <hit-row>
                                <hit-col class="-bg-1"> 3 col </hit-col>
                                <hit-col class="-bg-2"> 3 col </hit-col>
                                <hit-col class="-bg-1"> 3 col </hit-col>
                            </hit-row>
                        </hit-container>
                        
                        <hit-container>
                            <hit-row>
                                <hit-col class="-bg-1"> 6 col </hit-col>
                                <hit-col class="-bg-2"> 6 col </hit-col>
                                <hit-col class="-bg-1"> 6 col </hit-col>
                                <hit-col class="-bg-2"> 6 col </hit-col>
                                <hit-col class="-bg-1"> 6 col </hit-col>
                                <hit-col class="-bg-2"> 6 col </hit-col>
                            </hit-row>
                        </hit-container>
                    
                        <hit-container>
                            <hit-row>
                                <hit-col class="-bg-1"> Small Content </hit-col>
                                <hit-col class="-bg-2"> Huge content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis velit non gravida venenatis. Praesent consequat lectus purus, ut scelerisque velit condimentum eu. Maecenas sagittis ante ut turpis varius interdum. Quisque tellus ipsum, eleifend non ipsum id, suscipit ultricies neque. </hit-col>
                                <hit-col class="-bg-1"> Small Content </hit-col>
                            </hit-row>
                        </hit-container>
                    </div>
                `
    }))
  )


  .addParameters({ options: { showAddonPanel: false } })
  .add(
    "Fixed",
    withInfo({
      summary: "Fixed"
    })(() => ({
      components: { ...Components },
      template: ` 
                <div>
                    <hit-container>
                        <hit-row :fixed="true">
                            <hit-col class="-bg-1"> 2 col </hit-col>
                            <hit-col class="-bg-2"> 2 col </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row :fixed="true">
                            <hit-col class="-bg-1"> 6 col </hit-col>
                            <hit-col class="-bg-2"> 6 col </hit-col>
                            <hit-col class="-bg-1"> 6 col </hit-col>
                            <hit-col class="-bg-2"> 6 col </hit-col>
                            <hit-col class="-bg-1"> 6 col </hit-col>
                            <hit-col class="-bg-2"> 6 col </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row :fixed="true">
                            <hit-col class="-bg-1" size="2"> 2/12 col </hit-col>
                            <hit-col class="-bg-2"> auto col </hit-col>
                            <hit-col class="-bg-1" size="2"> 2/12 col </hit-col>
                        </hit-row>
                    </hit-container>
                </div>
            `
    }))
  )


  .addParameters({ options: { showAddonPanel: false } })
  .add(
    "No Gap",
    withInfo({
      summary: "No Gap"
    })(() => ({
      components: { ...Components },
      template: ` 
                <div>
                    <hit-container :noGap="true">
                        <hit-row>
                            <hit-col class="-bg-1"> 1/2 full gap </hit-col>
                            <hit-col class="-bg-2"> 1/2 full gap </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container :noGap="true">
                        <hit-row>
                            <hit-col class="-bg-1"> 1/4 full gap </hit-col>
                            <hit-col class="-bg-2"> 1/4 full gap </hit-col>
                            <hit-col class="-bg-1"> 1/4 full gap </hit-col>
                            <hit-col class="-bg-2"> 1/4 full gap </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container :noGap="true">
                        <hit-row>
                            <hit-col class="-bg-1"> 1/1 full gap </hit-col>
                        </hit-row>
                    </hit-container>
                </div>
            `
    }))
  )


  .addParameters({ options: { showAddonPanel: false } })
  .add(
    "No Gap Fixed",
    withInfo({
      summary: "No Gap Fixed"
    })(() => ({
      components: { ...Components },
      template: ` 
                <div>
                    <hit-container :noGap="true" :fixedWidth="true">
                        <hit-row>
                            <hit-col class="-bg-1"> 1 col </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container :noGap="true" :fixedWidth="true">
                        <hit-row>
                            <hit-col class="-bg-1"> 1/3 full gap </hit-col>
                            <hit-col class="-bg-2"> 1/3 full gap </hit-col>
                            <hit-col class="-bg-1"> 1/3 full gap </hit-col>
                        </hit-row>
                    </hit-container>
                </div>
            `
    }))
  )


  .addParameters({ options: { showAddonPanel: false } })
  .add(
    "Variable Col",
    withInfo({
      summary: "Variable Col"
    })(() => ({
      components: { ...Components },
      template: ` 
                <div>
                    <hit-container>
                        <hit-row>
                            <hit-col class="-bg-1" xxs="6"> Gap Full </hit-col>
                            <hit-col class="-bg-2" xxs="6"> Gap Full </hit-col>
                            <hit-col class="-bg-1" xxs="6"> Gap Full </hit-col>
                            <hit-col class="-bg-2" xxs="6"> Gap Full </hit-col>
                            <hit-col class="-bg-1" xxs="6"> Gap Full </hit-col>
                            <hit-col class="-bg-2" xxs="6"> Gap Full </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row>
                            <hit-col class="-bg-1" xs="3"> Gap Full </hit-col>
                            <hit-col class="-bg-2" xs="4"> Gap Full </hit-col>
                            <hit-col class="-bg-1" xs="3"> Gap Full </hit-col>
                            <hit-col class="-bg-2" xs="2"> Gap Full </hit-col>
                            <hit-col class="-bg-1" xs="6"> Gap Full </hit-col>
                            <hit-col class="-bg-2" xs="6"> Gap Full </hit-col>
                        </hit-row>
                    </hit-container>
                </div>
            `
    }))
  )


  .addParameters({ options: { showAddonPanel: false } })
  .add(
    "No Edges",
    withInfo({
      summary: "No Edges"
    })(() => ({
      components: { ...Components },
      template: ` 
                <div>
                    <hit-container :noEdges="true">
                        <hit-row>
                            <hit-col class="-bg-1" xxs="6"> Gap Full </hit-col>
                            <hit-col class="-bg-2" xxs="6"> Gap Full </hit-col>
                            <hit-col class="-bg-1" xxs="6"> Gap Full </hit-col>
                            <hit-col class="-bg-2" xxs="6"> Gap Full </hit-col>
                            <hit-col class="-bg-1" xxs="6"> Gap Full </hit-col>
                            <hit-col class="-bg-2" xxs="6"> Gap Full </hit-col>
                        </hit-row>
                    </hit-container>
                </div>
            `
    }))
  )


  .addParameters({ options: { showAddonPanel: false } })
  .add(
    "Align",
    withInfo({
      summary: "Align"
    })(() => ({
      components: { ...Components },
      template: ` 
                <div>
                    <hit-container>
                        <hit-row>
                            <hit-col class="-bg-1" align="left"> Left Align </hit-col>
                            <hit-col class="-bg-2" align="left"> Left Align </hit-col>
                            <hit-col class="-bg-1" align="left"> Left Align </hit-col>
                            <hit-col class="-bg-2" align="left"> Left Align </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row>
                            <hit-col class="-bg-1" align="center"> Center Align </hit-col>
                            <hit-col class="-bg-2" align="center"> Center Align </hit-col>
                            <hit-col class="-bg-1" align="center"> Center Align </hit-col>
                            <hit-col class="-bg-2" align="center"> Center Align </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row>
                            <hit-col class="-bg-1" align="right"> Right Align </hit-col>
                            <hit-col class="-bg-2" align="right"> Right Align </hit-col>
                            <hit-col class="-bg-1" align="right"> Right Align </hit-col>
                            <hit-col class="-bg-2" align="right"> Right Align </hit-col>
                        </hit-row>
                    </hit-container>
                </div>
            `
    }))
  )


  .addParameters({ options: { showAddonPanel: false } })
  .add(
    "Vertical Align",
    withInfo({
      summary: "Vertical Align"
    })(() => ({
      components: { ...Components },
      template: ` 
                <div>
                    <hit-container>
                        <hit-row class="-bg-1" verticalAlign="top">
                            <hit-col> <br><br><br><br><br> </hit-col>
                            <hit-col> Top Vertical Align </hit-col>
                            <hit-col> Top Vertical Align </hit-col>
                            <hit-col> Top Vertical Align </hit-col>
                            <hit-col> Top Vertical Align </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row class="-bg-2" verticalAlign="middle">
                            <hit-col> <br><br><br><br><br> </hit-col>
                            <hit-col> Midle Vertical Align </hit-col>
                            <hit-col> Midle Vertical Align </hit-col>
                            <hit-col> Midle Vertical Align </hit-col>
                            <hit-col> Midle Vertical Align </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row class="-bg-1" verticalAlign="bottom">
                            <hit-col> <br><br><br><br><br> </hit-col>
                            <hit-col> Bottom Vertical Align </hit-col>
                            <hit-col> Bottom Vertical Align </hit-col>
                            <hit-col> Bottom Vertical Align </hit-col>
                            <hit-col clas> Bottom Vertical Align </hit-col>
                        </hit-row>
                    </hit-container>
                </div>
            `
    }))
  )


  .addParameters({ options: { showAddonPanel: false } })
  .add(
    "Row Reverse",
    withInfo({
      summary: "Row Reverse"
    })(() => ({
      components: { ...Components },
      template: ` 
                <div>
                    <hit-container>
                        <hit-row :rowReverse="true">
                            <hit-col class="-bg-1"> 1 </hit-col>
                            <hit-col class="-bg-2"> 2 </hit-col>
                            <hit-col class="-bg-1"> 3 </hit-col>
                            <hit-col class="-bg-2"> 4 </hit-col>
                            <hit-col class="-bg-1"> 5 </hit-col>
                            <hit-col class="-bg-2"> 6 </hit-col>
                        </hit-row>
                    </hit-container>
                </div>
            `
    }))
  )


  .addParameters({ options: { showAddonPanel: false } })
  .add(
    "Column Reverse",
    withInfo({
      summary: "Column Reverse"
    })(() => ({
      components: { ...Components },
      template: ` 
                <div>
                    <hit-container>
                        <hit-row :colReverse="true">
                            <hit-col class="-bg-1"> 1 </hit-col>
                            <hit-col class="-bg-2"> 2 </hit-col>
                            <hit-col class="-bg-1"> 3 </hit-col>
                            <hit-col class="-bg-2"> 4 </hit-col>
                            <hit-col class="-bg-1"> 5 </hit-col>
                            <hit-col class="-bg-2"> 6 </hit-col>
                        </hit-row>
                    </hit-container>
                </div>
            `
    }))
  )


  .addParameters({ options: { showAddonPanel: false } })
  .add(
    "Offset",
    withInfo({
      summary: "Offset"
    })(() => ({
      components: { ...Components },
      template: ` 
                <div>
                    <hit-container>
                        <hit-row>
                            <hit-col class="-bg-1" offset-xxs="2" offset-md="4">
                                offset= xxs: 2, md: 4
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row>
                            <hit-col class="-bg-1" offset="2" size="3">
                                offset= 2, size= 3
                            </hit-col>
                            <hit-col class="-bg-2" offset="2" size="3">
                                offset= 2, size= 3
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row>
                            <hit-col class="-bg-1" offset="3" size="3">
                                offset= 3, size= 3
                            </hit-col>
                            <hit-col class="-bg-2" offset="3" size="3">
                                offset= 3, size= 3
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row>
                            <hit-col class="-bg-1" offset="2" size="8">
                                offset= 3, size= 3
                            </hit-col>
                        </hit-row>
                    </hit-container>
                </div>
            `
    }))
  )

  .addParameters({ options: { showAddonPanel: false } })
  .add(
    "Border Col",
    withInfo({
      summary: "Border Col"
    })(() => ({
      components: { ...Components },
      template: ` 
                <div>
                    <hit-container>
                        <hit-row>
                            <hit-col :border-top="true" xxs="8" md="4" offset-xxs="2" offset-md="4">
                                Border Top
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row>
                            <hit-col :border-bottom="true" xxs="8" md="4" offset-xxs="2" offset-md="4">
                                Border Bottom
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row>
                            <hit-col :border-left="true" xxs="8" md="4" offset-xxs="2" offset-md="4">
                                Border Bottom
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row>
                            <hit-col :border-right="true" xxs="8" md="4" offset-xxs="2" offset-md="4">
                                Border Bottom
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row>
                            <hit-col :border="true" xxs="8" md="4" offset-xxs="2" offset-md="4">
                                Border Bottom
                            </hit-col>
                        </hit-row>
                    </hit-container>
                </div>
            `
    }))
  )

  .addParameters({ options: { showAddonPanel: false } })
  .add(
    "Border Row",
    withInfo({
      summary: "Border Row"
    })(() => ({
      components: { ...Components },
      template: ` 
                <div>
                    <hit-container>
                        <hit-row :border-bottom="true">
                            <hit-col>
                                Border Bottom
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row :border-top="true">
                            <hit-col>
                                Border Top
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row :border-right="true">
                            <hit-col>
                                Border Right
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row :border-left="true">
                            <hit-col>
                                Border Left
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row :border="true">
                            <hit-col>
                                Border Full
                            </hit-col>
                        </hit-row>
                    </hit-container>
                </div>
            `
    }))
  )

  .addParameters({ options: { showAddonPanel: false } })
  .add(
    "Column Size",
    withInfo({
      summary: "Column Size"
    })(() => ({
      components: { ...Components },
      template: ` 
                <div>
                   <hit-container>
                        <hit-row >
                            <hit-col class="-bg-1" xxs="6" xs="3" sm="6" md="12" lg="3" xl="6">
                                size= xxs: 6, xs: 3, sm: 6, md: 12, lg: 3, xl: 6
                            </hit-col>
                            <hit-col class="-bg-2" xxs="6" xs="3" sm="6" md="12" lg="3" xl="6">
                                size= xxs: 6, xs: 3, sm: 6, md: 12, lg: 3, xl: 6
                            </hit-col>
                            <hit-col class="-bg-1" xxs="6" xs="3" sm="6" md="12" lg="3" xl="6">
                                size= xxs: 6, xs: 3, sm: 6, md: 12, lg: 3, xl: 6
                            </hit-col>
                            <hit-col class="-bg-2" xxs="6" xs="3" sm="6" md="12" lg="3" xl="6">
                                size= xxs: 6, xs: 3, sm: 6, md: 12, lg: 3, xl: 6
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row >
                            <hit-col class="-bg-1" sm="6" md="12" lg="6">
                                size= sm: 6, md: 12, lg: 6
                            </hit-col>
                            <hit-col class="-bg-2" sm="6" md="12" lg="6">
                                size= sm: 6, md: 12, lg: 6
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row>
                            <hit-col class="-bg-1" xxs="4" md="2">
                                size= xxs: 4, md: 2
                            </hit-col>
                            <hit-col class="-bg-2" xxs="4" md="2">
                                size= xxs: 4, md: 2
                            </hit-col>
                            <hit-col class="-bg-1" xxs="4" md="2">
                                size= xxs: 4, md: 2
                            </hit-col>
                            <hit-col class="-bg-2" xxs="4" md="2">
                                size= xxs: 4, md: 2
                            </hit-col>
                            <hit-col class="-bg-1" xxs="4" md="2">
                                size= xxs: 4, md: 2
                            </hit-col>
                            <hit-col class="-bg-2" xxs="4" md="2">
                                size= xxs: 4, md: 2
                            </hit-col>
                        </hit-row>
                    </hit-container>
                </div>
            `
    }))
  )

  .addParameters({ options: { showAddonPanel: false } })
  .add(
    "isHidden",
    withInfo({
      summary: "isHidden"
    })(() => ({
      components: { ...Components },
      template: ` 
                <div>
                   <hit-container>
                        <hit-row>
                            <hit-col class="-bg-1" :hidden-xxs="true" :hidden-sm="true">
                                This one hides on xxs, xs and sm
                            </hit-col>
                            <hit-col class="-bg-2" :hidden-md="true" :hidden-xl="true">
                                This one hides on md, lg and xl
                            </hit-col>
                        </hit-row>
                    </hit-container>
                </div>
            `
    }))
  )

  .addParameters({ options: { showAddonPanel: false } })
  .add(
    "Distribution",
    withInfo({
      summary: "Distribution"
    })(() => ({
      components: { ...Components },
      template: ` 
                <div>
                   <hit-container>
                        <hit-row distribution="center">
                            <hit-col class="-bg-1" size="3">
                                center
                            </hit-col>
                            <hit-col class="-bg-2" size="3">
                                center
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row distribution="start">
                            <hit-col class="-bg-1" size="3">
                                start
                            </hit-col>
                            <hit-col class="-bg-2" size="3">
                                start
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row distribution="end">
                            <hit-col class="-bg-1" size="3">
                                end
                            </hit-col>
                            <hit-col class="-bg-2" size="3">
                                end
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row distribution="around">
                            <hit-col class="-bg-1" size="3">
                                around
                            </hit-col>
                            <hit-col class="-bg-2" size="3">
                                around
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row distribution="between">
                            <hit-col class="-bg-1" size="3">
                                between
                            </hit-col>
                            <hit-col class="-bg-2" size="3">
                                between
                            </hit-col>
                        </hit-row>
                    </hit-container>
                </div>
            `
    }))
  )

  .addParameters({ options: { showAddonPanel: false } })
  .add(
    "Order",
    withInfo({
      summary: "Order"
    })(() => ({
      components: { ...Components },
      template: ` 
                <div>
                   <hit-container>
                        <hit-row>
                            <hit-col class="-bg-1" order="last">
                                Last, but actually the first
                            </hit-col>
                            <hit-col class="-bg-2" order="first">
                                First, but actually the middle
                            </hit-col>
                            <hit-col class="-bg-1">
                                Middle, but actually the last
                            </hit-col>
                        </hit-row>
                    </hit-container>
                </div>
            `
    }))
  )

  .addParameters({ options: { showAddonPanel: false } })
  .add(
    "Individual Sizes",
    withInfo({
      summary: "Individual Sizes"
    })(() => ({
      components: { ...Components },
      template: ` 
                <div>
                   <hit-container>
                        <hit-row>
                            <hit-col class="-bg-1" size="6">
                                6/12 (Half)
                            </hit-col>
                            <hit-col class="-bg-2">
                                Auto
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row>
                            <hit-col class="-bg-1" size="4">
                                4/12 (Third)
                            </hit-col>
                            <hit-col class="-bg-2">
                                Auto
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row>
                            <hit-col class="-bg-1" size="3">
                                3/12 (Quarter)
                            </hit-col>
                            <hit-col class="-bg-2">
                                Auto
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row>
                            <hit-col class="-bg-1" size="1">
                                1/12
                            </hit-col>
                            <hit-col class="-bg-2">
                                Auto
                            </hit-col>
                            <hit-col class="-bg-1" size="1">
                                1/12
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row>
                            <hit-col class="-bg-1" size="2">
                                2/12
                            </hit-col>
                            <hit-col class="-bg-2">
                                Auto
                            </hit-col>
                            <hit-col class="-bg-1" size="2">
                                2/12
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row>
                            <hit-col class="-bg-1" size="4">
                                4/12
                            </hit-col>
                            <hit-col class="-bg-2">
                                Auto
                            </hit-col>
                            <hit-col class="-bg-1" size="4">
                                4/12
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row>
                            <hit-col class="-bg-1">
                                Auto
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row>
                            <hit-col class="-bg-1" size="1">
                                1/12
                            </hit-col>
                            <hit-col class="-bg-2">
                                Auto
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row>
                            <hit-col class="-bg-1" size="2">
                                2/12
                            </hit-col>
                            <hit-col class="-bg-2">
                                Auto
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row>
                            <hit-col class="-bg-1" size="3">
                                3/12
                            </hit-col>
                            <hit-col class="-bg-2">
                                Auto
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row>
                            <hit-col class="-bg-1" size="4">
                                4/12
                            </hit-col>
                            <hit-col class="-bg-2">
                                Auto
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row>
                            <hit-col class="-bg-1" size="5">
                                5/12
                            </hit-col>
                            <hit-col class="-bg-2">
                                Auto
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row>
                            <hit-col class="-bg-1" size="6">
                                6/12
                            </hit-col>
                            <hit-col class="-bg-2">
                                Auto
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row>
                            <hit-col class="-bg-1" size="7">
                                7/12
                            </hit-col>
                            <hit-col class="-bg-2">
                                Auto
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row>
                            <hit-col class="-bg-1" size="8">
                                8/12
                            </hit-col>
                            <hit-col class="-bg-2">
                                Auto
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row>
                            <hit-col class="-bg-1" size="9">
                                9/12
                            </hit-col>
                            <hit-col class="-bg-2">
                                Auto
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row>
                            <hit-col class="-bg-1" size="10">
                                10/12
                            </hit-col>
                            <hit-col class="-bg-2">
                                Auto
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row>
                            <hit-col class="-bg-1" size="11">
                                11/12
                            </hit-col>
                            <hit-col class="-bg-2">
                                Auto
                            </hit-col>
                        </hit-row>
                    </hit-container>
            
                    <hit-container>
                        <hit-row>
                            <hit-col class="-bg-1" size="12">
                                12/12
                            </hit-col>
                        </hit-row>
                    </hit-container>
                </div>
            `
    }))
  );
