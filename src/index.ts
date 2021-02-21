import initMenu, { IMenuConfig, IMenu } from './menu';
import { initText, ITextConfig, IText } from './text';
import { generateMenuItems } from './helper';

interface IEditorConfig {
    menuConfig: IMenuConfig
    textConfig: ITextConfig
}

export default class EasyEditor {

    private $containerDom: HTMLElement // 最外层包裹的dom元素, 同样也是由用户传进来的元素
    private $menuDom: HTMLElement // 菜单栏Dom元素
    private $textDom: HTMLElement // 编辑区Dom元素

    public menu: IMenu // 与菜单相关的一系列功能函数
    public text: IText // 与编辑区相关的一系列功能函数

    public config: IEditorConfig = {
        menuConfig: {
            // 菜单栏配置: 如宽高, 边框样式, 以及菜单项等配置信息
            width: "100%",
            height: "100%",
            border: "1px solid #666",
            menuItems: generateMenuItems()
        },
        textConfig: {
            // 编辑区配置: 宽高, 背景颜色, 边框等样式
        }
    }

    public cacheRange: Range // 缓存用户选中区域

    constructor(dom: HTMLElement) {
        if (!dom) {
            throw new Error("传入Dom为空!!");
        }
        this.$containerDom = dom;
    }

    public create(config?: IEditorConfig) {
        if(config) this.config = config;
        this.setMenuArea();
        this.setTextArea();

        document.execCommand("defaultParagraphSeparator", false, "p");
    }

    private setMenuArea() {
        [this.$menuDom, this.menu] = initMenu(this, this.config.menuConfig);
        this.$containerDom.appendChild(this.$menuDom);
    }

    private setTextArea() {
        [this.$textDom, this.text] = initText(this, this.config.textConfig);
        this.$containerDom.appendChild(this.$textDom);
    }
}


declare var window: Window & { EasyEditor: any };
window.EasyEditor = EasyEditor;
