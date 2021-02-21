import EasyEditor from './index';

export interface IMenuItemChild {
    text: string
    command: string
}

export interface IMenuItem {
    icon?: string // icon图标的url
    text?: string // 字体
    width?: string // 宽度
    height?: string // 高度
    command?: string // 命令
    children?: IMenuItemChild[] // 二级菜单项
}

export interface IMenuConfig {
    width?: string
    height?: string
    border?: string
    menuItems?: IMenuItem[]
}

export interface IMenu {
    width: (x: number) => void
    height: (x: number) => void
}

export default function initMenu(editor: EasyEditor, config: IMenuConfig): [HTMLElement, IMenu] {
    return [initDom(editor, config), initApi(editor, config)];
}

function initDom(editor: EasyEditor, config: IMenuConfig): HTMLElement {
    const menuDom: HTMLElement = document.createElement("div");
    menuDom.style.width = config.width || "100%";
    menuDom.style.height = config.height || "20px";
    menuDom.style.border = config.border || "1px solid #666";
    menuDom.style.display = "flex";
    menuDom.style.padding = "6px 10px";
    menuDom.style.boxSizing = "border-box";
    menuDom.style.alignItems = "center";

    const menuItems = config.menuItems;
    if (menuItems) {
        for (let i = 0; i < menuItems.length; ++i) {
            const menuItemDom = document.createElement("div");
            if (menuItems[i].icon) {
                menuItemDom.style.backgroundImage = menuItems[i].icon;
            }
            else {
                menuItemDom.innerText = menuItems[i].text;
            }
            menuItemDom.style.width = menuItems[i].width || "20px";
            menuItemDom.style.height = menuItems[i].height || "20px";
            menuItemDom.style.lineHeight = menuItems[i].height || "20px";
            menuItemDom.style.cursor = "pointer";
            menuItemDom.style.margin = "0 5px";
            menuItemDom.style.position = "relative";

            const children = menuItems[i].children;
            let childWrapperDom: HTMLElement;
            if (children) {
                childWrapperDom = document.createElement("ul");
                childWrapperDom.style.display = "none";
                childWrapperDom.style.width = "100px";
                childWrapperDom.style.position = "absolute";
                childWrapperDom.style.left = "-4px";
                childWrapperDom.style.top = "28px";
                childWrapperDom.style.margin = "0";
                childWrapperDom.style.padding = "0px";
                childWrapperDom.style.boxSizing = "border-box";
                childWrapperDom.style.background = "#fff";

                for (let i = 0; i < children.length; ++i) {
                    const child = document.createElement("li");
                    child.style.listStyle = "none";
                    child.style.border = "1px solid #666";
                    child.style.borderTop = "none";
                    child.style.padding = "2px";
                    child.innerText = children[i].text;
                    child.setAttribute("command", children[i].command);
                    childWrapperDom.appendChild(child);
                }
                menuItemDom.appendChild(childWrapperDom);

                menuItemDom.addEventListener('click', function() {
                    if(childWrapperDom.style.display == "block") 
                        childWrapperDom.style.display = "none";
                    else 
                        childWrapperDom.style.display = "block"
                })
            }
            else menuItemDom.setAttribute("command", menuItems[i].command);
            menuDom.appendChild(menuItemDom);
        }
    }

    menuDom.addEventListener('click', function(e) {
        const targetDom = e.target as HTMLElement;
        const command = targetDom.getAttribute('command');
        if(!command) return ;
        if(editor.cacheRange) {
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(editor.cacheRange);
            handleCommand(command);
        }
    })

    return menuDom;

    function handleCommand(command: string) {
        console.log(command);
        if(command.indexOf("-") == -1) document.execCommand(command);
        else {
            const [commandName, arg] = command.split("-");
            document.execCommand(commandName, false, arg); 
        }
    }
}



function initApi(editor: EasyEditor, config: IMenuConfig): IMenu {
    const menu: IMenu = {
        width() { },
        height() { },
    };

    return menu;
}