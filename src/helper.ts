import { IMenuItem } from './menu';

export function generateMenuItems(): IMenuItem[] {
    return [
        {
            text: "H",
            children: [
                { text: '一级标题', command: 'fontSize-6' },
                { text: '二级标题', command: 'fontSize-5' },
                { text: '三级标题', command: 'fontSize-4' },
                { text: '四级标题', command: 'fontSize-3' },
                { text: '五级标题', command: 'fontSize-2' },
                { text: '六级标题', command: 'fontSize-1' }
            ]
        },
        {
            text: "B",
            command: "bold"
        },
        {
            text: "C",
            children: [
                {text: "red", command: "foreColor-red"},
                {text: "blue", command: "foreColor-blue"},
                {text: "green", command: "foreColor-green"},
            ]
        }
    ]
}