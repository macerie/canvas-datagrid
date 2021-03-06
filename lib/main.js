/*jslint browser: true, unparam: true, todo: true*/
/*globals define: true, requestAnimationFrame: false, performance: false, btoa: false*/
(window.define || function defineStub(a, b) {
    'use strict';
    window.canvasDatagrid = b();
    return;
})([], function context() {
    'use strict';
    function grid(args) {
        args = args || {};
        var defaultAttributes = [
                ['tree', false],
                ['showNewRow', false],
                ['treeHorizontalScroll', true],
                ['saveAppearance', true],
                ['selectionFollowsActiveCell', false],
                ['multiLine', false],
                ['editable', true],
                ['allowColumnReordering', true],
                ['showFilter', true],
                ['pageUpDownOverlap', 1],
                ['persistantSelectionMode', false],
                ['rowSelectionMode', false],
                ['autoResizeColumns', false],
                ['allowRowHeaderResize', true],
                ['allowColumnResize', true],
                ['allowRowResize', true],
                ['allowRowResizeFromCell', false],
                ['allowColumnResizeFromCell', false],
                ['showPerformance', false],
                ['borderResizeZone', 10],
                ['showHeaders', true],
                ['showRowNumbers', true],
                ['showRowHeaders', true]
            ],
            defaultStyles = [
                ['maxEllipsisLength', 250],
                ['treeGridHeight', 250],
                ['treeArrowHeight', 8],
                ['treeArrowWidth', 13],
                ['treeArrowColor', 'rgba(155, 155, 155, 1)'],
                ['treeArrowBorderColor', 'rgba(195, 199, 202, 1)'],
                ['treeArrowBorderWidth', 1],
                ['treeArrowMarginRight', 5],
                ['treeArrowMarginLeft', 0],
                ['treeArrowMarginTop', 6],
                ['scrollBarWidth', 14],
                ['scrollDivOverlap', 0.7],
                ['filterTextPrefix', '(filtered)'],
                ['editCellFontSize', '16px'],
                ['editCellFontFamily', 'sans-serif'],
                ['editCellPaddingLeft', 4],
                ['styleSheet', ''],
                ['contextMenuItemMargin', '2px'],
                ['contextMenuItemBorderRadius', '3px'],
                ['contextMenuLabelDisplay', 'inline-block'],
                ['contextMenuLabelMinWidth', '75px'],
                ['contextMenuHoverBackground', 'rgba(182, 205, 250, 1)'],
                ['contextMenuColor', 'rgba(43, 48, 43, 1)'],
                ['contextMenuHoverColor', 'rgba(43, 48, 153, 1)'],
                ['contextMenuFontSize', '16px'],
                ['contextMenuFontFamily', 'sans-serif'],
                ['contextMenuBackground', 'rgba(222, 227, 233, 0.95)'],
                ['contextMenuBorder', 'solid 1px rgba(158, 163, 169, 1)'],
                ['contextMenuPadding', '2px'],
                ['contextMenuBorderRadius', '3px'],
                ['contextMenuOpacity', '0.98'],
                ['contextMenuFilterInvalidExpresion', 'rgba(237, 155, 156, 1)'],
                ['contextMenuMarginTop', 0],
                ['contextMenuMarginLeft', 5],
                ['autosizePadding', 5],
                ['minHeight', 24],
                ['minRowHeight', 10],
                ['minColumnWidth', 10],
                ['columnWidth', 250],
                ['backgroundColor', 'rgba(240, 240, 240, 1)'],
                ['headerOrderByArrowHeight', 8],
                ['headerOrderByArrowWidth', 13],
                ['headerOrderByArrowColor', 'rgba(155, 155, 155, 1)'],
                ['headerOrderByArrowBorderColor', 'rgba(195, 199, 202, 1)'],
                ['headerOrderByArrowBorderWidth', 1],
                ['headerOrderByArrowMarginRight', 5],
                ['headerOrderByArrowMarginLeft', 0],
                ['headerOrderByArrowMarginTop', 6],
                ['cellHeightWithChildGrid', 150],
                ['cellWidthWithChildGrid', 250],
                ['cellHeight', 24],
                ['cellFont', '16px sans-serif'],
                ['cellPaddingTop', 5],
                ['cellPaddingLeft', 5],
                ['cellPaddingRight', 7],
                ['cellAlignment', 'left'],
                ['cellColor', 'rgba(0, 0, 0, 1)'],
                ['cellBackgroundColor', 'rgba(240, 240, 240, 1)'],
                ['cellHoverColor', 'rgba(0, 0, 0, 1)'],
                ['cellHoverBackgroundColor', 'rgba(240, 240, 240, 1)'],
                ['cellSelectedColor', 'rgba(43, 48, 153, 1)'],
                ['cellSelectedBackgroundColor', 'rgba(182, 205, 250, 1)'],
                ['cellBorderWidth', 0.25],
                ['cellBorderColor', 'rgba(195, 199, 202, 1)'],
                ['activeCellFont', '16px sans-serif'],
                ['activeCellPaddingTop', 5],
                ['activeCellPaddingLeft', 5],
                ['activeCellPaddingRight', 7],
                ['activeCellAlignment', 'left'],
                ['activeCellColor', 'rgba(43, 48, 153, 1)'],
                ['activeCellBackgroundColor', 'rgba(111, 160, 255, 1)'],
                ['activeCellHoverColor', 'rgba(43, 48, 153, 1)'],
                ['activeCellHoverBackgroundColor', 'rgba(110, 168, 255, 1)'],
                ['activeCellSelectedColor', 'rgba(43, 48, 153, 1)'],
                ['activeCellSelectedBackgroundColor', 'rgba(110, 168, 255, 1)'],
                ['activeCellBorderWidth', 0.5],
                ['activeCellBorderColor', 'rgba(151, 173, 190, 1)'],
                ['headerCellPaddingTop', 5],
                ['headerCellPaddingLeft', 5],
                ['headerCellPaddingRight', 7],
                ['headerCellHeight', 25],
                ['headerCellBorderWidth', 0.5],
                ['headerCellBorderColor', 'rgba(172, 175, 179, 1)'],
                ['headerCellFont', '16px sans-serif'],
                ['headerCellColor', 'rgba(50, 50, 50, 1)'],
                ['headerCellBackgroundColor', 'rgba(222, 227, 233, 1)'],
                ['headerCellHoverColor', 'rgba(43, 48, 153, 1)'],
                ['headerCellHoverBackgroundColor', 'rgba(181, 201, 223, 1)'],
                ['headerRowWidth', 57],
                ['rowHeaderCellPaddingTop', 5],
                ['rowHeaderCellPaddingLeft', 5],
                ['rowHeaderCellPaddingRight', 25],
                ['rowHeaderCellHeight', 25],
                ['rowHeaderCellBorderWidth', 0.5],
                ['rowHeaderCellBorderColor', 'rgba(172, 175, 179, 1)'],
                ['rowHeaderCellFont', '16px sans-serif'],
                ['rowHeaderCellColor', 'rgba(50, 50, 50, 1)'],
                ['rowHeaderCellBackgroundColor', 'rgba(222, 227, 233, 1)'],
                ['rowHeaderCellHoverColor', 'rgba(43, 48, 153, 1)'],
                ['rowHeaderCellHoverBackgroundColor', 'rgba(181, 201, 223, 1)'],
                ['rowHeaderCellSelectedColor', 'rgba(43, 48, 153, 1)'],
                ['rowHeaderCellSelectedBackgroundColor', 'rgba(182, 205, 250, 1)']
            ],
            isChildGrid,
            input,
            contextMenu,
            controlInput,
            activeCell = [0, 0],
            currentCell,
            storageName = 'canvasDataGrid',
            storedSettings,
            invalidSearchExpClass = 'canvas-datagrid-invalid-search-regExp',
            uniqueId = '_canvasDataGridUniqueId',
            orderBy = uniqueId,
            orderDirection = 'asc',
            invalidFilterRegEx,
            filterBy = '',
            filterValue = '',
            filters = {},
            ellipsisCache = {},
            container,
            canvas,
            height,
            width,
            selecting,
            scrollBox,
            scrollArea,
            schema,
            data,
            ctx,
            visibleCells,
            visibleRows = [],
            sizes = {
                rows: {},
                columns: {},
            },
            currentFilter = function () { return true; },
            selections = [],
            selectionBounds,
            hovers = {},
            attributes = {},
            style = {},
            intf = {},
            formatters = {},
            sorters = {},
            schemaHashes = {},
            events = {},
            scrollHeight = 0,
            uId = 0,
            scrollWidth = 0,
            dragStartObject,
            resizeItem,
            resizingItem,
            resizingStartingWidth,
            resizingStartingHeight,
            resizeMode,
            ignoreNextClick,
            tempSchema,
            originalData,
            changes = [],
            scrollEdit,
            scrollIndexTop = 0,
            scrollPixelTop = 0,
            newRow,
            parentGrid,
            childGrids = {},
            openChildren = {},
            dragStart;
        function scrollOffset(e) {
            var x = 0, y = 0;
            while (e.parentNode) {
                x -= e.scrollLeft;
                y -= e.scrollTop;
                e = e.parentNode;
            }
            return {left: x, top: y};
        }
        function position(e) {
            var x = 0, y = 0, s = e, h, w;
            while (e.offsetParent) {
                x += e.offsetLeft;
                y += e.offsetTop;
                h = e.offsetHeight;
                w = e.offsetWidth;
                e = e.offsetParent;
            }
            e = s;
            s = scrollOffset(e);
            return { left: x + s.left, top: y + s.top, height: h, width: w };
        }
        function getHeaderCellHeight() {
            return sizes.rows[-1] || style.headerCellHeight;
        }
        function getHeaderCellWidth() {
            return attributes.showRowHeaders
                ? (sizes.columns.cornerCell ||  style.headerRowWidth) : 0;
        }
        function stopPropagation(e) { e.stopPropagation(); }
        function setStorageData() {
            if (!attributes.saveAppearance) { return; }
            localStorage.setItem(storageName + '-' + args.name, JSON.stringify({
                sizes: sizes
            }));
        }
        function getSchema() {
            return schema || tempSchema;
        }
        function getVisibleSchema() {
            return getSchema().filter(function (col) { return !col.hidden; });
        }
        function createNewRowData() {
            newRow = {};
            newRow[uniqueId] = uId;
            uId += 1;
            getSchema().forEach(function forEachHeader(header, index) {
                var d = header.defaultValue || '';
                if (typeof d === 'function') {
                    d = d.apply(intf, [header, index]);
                }
                newRow[header.name] = d;
            });
        }
        function addEllipsis(text, width) {
            if (text.length > style.maxEllipsisLength) {
                return text;
            }
            if (ellipsisCache[text] && ellipsisCache[text][width]) {
                return ellipsisCache[text][width];
            }
            var o = text, i = text.length;
            while (width < ctx.measureText(o).width && i > 1) {
                i -= 1;
                o = text.substring(0, i) + "...";
            }
            ellipsisCache[text] = ellipsisCache[text] || {};
            ellipsisCache[text][width] = o;
            return o;
        }
        function addEventListener(ev, fn) {
            events[ev] = events[ev] || [];
            events[ev].push(fn);
        }
        function removeEventListener(ev, fn) {
            (events[ev] || []).forEach(function removeEachListener(sfn, idx) {
                if (fn === sfn) {
                    events[ev].splice(idx, 1);
                }
            });
        }
        function dispatchEvent(ev, args, context) {
            args = args || {};
            context = context || intf;
            var defaultPrevented;
            if (!events[ev]) { return; }
            events[ev].forEach(function dispatchEachEvent(fn) {
                args.preventDefault = function preventDefault() {
                    defaultPrevented = true;
                };
                fn.apply(context, args);
            });
            return defaultPrevented;
        }
        formatters.string = function cellFormatterString(ctx, cell) {
            return cell.value !== undefined ? cell.value : '';
        };
        formatters.rowHeaderCell = formatters.string;
        formatters.headerCell = formatters.string;
        formatters.number = formatters.string;
        formatters.int = formatters.string;
        function getSchemaNameHash(key) {
            var n = 0;
            while (schemaHashes[key]) {
                n += 1;
                key = key + n;
            }
            return key;
        }
        function filter(type) {
            var f = filters[type];
            if (!f) {
                console.warn('Cannot find filter for type %s, falling back to substring match.', type);
                f = filters.string;
            }
            return f;
        }
        function getSchemaFromData() {
            return Object.keys(data[0] || {' ': ''}).map(function mapEachSchemaColumn(key, index) {
                var type = typeof data[0][key],
                    i = {
                        name: key,
                        title: key,
                        width: style.columnWidth,
                        index: index,
                        type: type,
                        filter: filter(type)
                    };
                if (key === uniqueId) {
                    i.hidden = true;
                }
                i[uniqueId] = getSchemaNameHash(key);
                return i;
            });
        }
        function getSelectedData(expandToRow) {
            var d = [], s = getSchema(), l = data.length;
            selections.forEach(function (row, index) {
                if (index === l) { return; }
                d[index] = {};
                if (expandToRow) {
                    s.forEach(function (column) {
                        d[index][column.name] = data[index][column.name];
                    });
                } else {
                    row.forEach(function (col) {
                        if (col === -1) { return; }
                        d[index][s[col].name] = data[index][s[col].name];
                    });
                }
            });
            return d;
        }
        function clearChangeLog() {
            changes = [];
        }
        function selectArea() {
            var x, y;
            selections = [];
            for (x = selectionBounds.top; x <= selectionBounds.bottom; x += 1) {
                selections[x] = [];
                for (y = selectionBounds.left; y <= selectionBounds.right; y += 1) {
                    selections[x].push(y);
                }
            }
            dispatchEvent('selectionchanged', [getSelectedData(), selections, selectionBounds], intf);
        }
        function drawOrderByArrow(x, y) {
            ctx.fillStyle = style.headerOrderByArrowColor;
            ctx.strokeStyle = style.headerOrderByArrowBorderColor;
            ctx.beginPath();
            x = x + style.headerOrderByArrowMarginLeft;
            y = y + style.headerOrderByArrowMarginTop;
            if (orderDirection === 'asc') {
                ctx.moveTo(x, y);
                ctx.lineTo(x + style.headerOrderByArrowWidth, y);
                ctx.lineTo(x + (style.headerOrderByArrowWidth * 0.5), y + style.headerOrderByArrowHeight);
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y + style.headerOrderByArrowHeight);
                ctx.lineTo(x + style.headerOrderByArrowWidth, y + style.headerOrderByArrowHeight);
                ctx.lineTo(x + (style.headerOrderByArrowWidth * 0.5), y);
                ctx.lineTo(x, y + style.headerOrderByArrowHeight);
            }
            ctx.stroke();
            ctx.fill();
            return style.headerOrderByArrowMarginLeft
                + style.headerOrderByArrowWidth
                + style.headerOrderByArrowMarginRight;
        }
        function findColumnMaxTextLength(name) {
            var m = -Infinity;
            if (name === 'cornerCell') {
                ctx.font = style.rowHeaderCellFont;
                return ctx.measureText((data.length + (attributes.showNewRow ? 1 : 0)).toString()).width
                    + style.rowHeaderCellPaddingRight
                    + style.rowHeaderCellPaddingLeft
                    + (attributes.tree ? style.treeArrowWidth
                        + style.treeArrowMarginLeft + style.treeArrowMarginRight : 0);
            }
            getSchema().forEach(function (col) {
                if (col.name !== name) { return; }
                ctx.font = style.headerCellFont;
                var t = ctx.measureText(col.title || col.name).width
                    + style.headerCellPaddingRight
                    + style.headerCellPaddingLeft;
                m = t > m ? t : m;
            });
            data.forEach(function (row) {
                ctx.font = style.cellFont;
                var t = ctx.measureText(row[name]).width
                    + style.cellPaddingRight
                    + style.cellPaddingLeft;
                m = t > m ? t : m;
            });
            return m;
        }
        function drawTreeArrow(cell, x, y) {
            ctx.fillStyle = style.treeArrowColor;
            ctx.strokeStyle = style.treeArrowBorderColor;
            ctx.beginPath();
            x = x + style.treeArrowMarginLeft;
            y = y + style.treeArrowMarginTop;
            if (openChildren[cell.data[uniqueId]]) {
                ctx.moveTo(x, y);
                ctx.lineTo(x + style.treeArrowWidth, y);
                ctx.lineTo(x + (style.treeArrowWidth * 0.5), y + style.treeArrowHeight);
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
                ctx.lineTo(x + style.treeArrowHeight, y + (style.treeArrowWidth * 0.5));
                ctx.lineTo(x, y + style.treeArrowWidth);
                ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.fill();
            return style.treeArrowMarginLeft
                + style.treeArrowWidth
                + style.treeArrowMarginRight;
        }
        function setScrollArea() {
            var cellBorder = style.cellBorderWidth * 2,
                headerCellBorder =  style.headerCellBorderWidth * 2;
            scrollHeight = data.reduce(function reduceData(accumulator, row) {
                return accumulator + (sizes.rows[row[uniqueId]] || style.cellHeight) + cellBorder;
            }, 0) || 0;
            scrollWidth = getSchema().reduce(function reduceSchema(accumulator, column) {
                if (column.hidden) { return accumulator; }
                return accumulator + (sizes.columns[column[uniqueId]] || column.width || style.columnWidth) + cellBorder;
            }, 0) || 0;
            if (attributes.showNewRow) {
                scrollHeight += style.cellHeight + cellBorder;
            }
            scrollArea.style.height = scrollHeight - headerCellBorder + style.scrollDivOverlap + 'px';
            scrollArea.style.width = scrollWidth - style.scrollBarWidth + 'px';
        }
        function draw() {
            if (!container.parentNode
                    || !container.offsetHeight
                    || !container.offsetWidth) {
                return;
            }
            var checkScrollHeight, borderWidth, rowHeaderCell, p, cx, cy, cellHeight,
                cornerCell, y, x, c, h, w, s, r, rd, l = data.length, scrollLeft = 0,
                headerCellHeight = getHeaderCellHeight(),
                headerCellWidth = getHeaderCellWidth(),
                treeGridAttributes, treeGrid, rowOpen, rowHeight;
            if (attributes.showPerformance) {
                p = performance.now();
            }
            if (attributes.treeHorizontalScroll) {
                scrollLeft = scrollBox.scrollLeft * -1;
            }
            borderWidth = style.cellBorderWidth * 2;
            visibleRows = [];
            s = getVisibleSchema();
            visibleCells = [];
            x = 0;
            y = scrollBox.scrollTop * -1 + headerCellHeight + scrollPixelTop;
            h = canvas.height = height;
            w = canvas.width = width - style.scrollBarWidth;
            ctx.fillStyle = style.backgroundColor;
            ctx.fillRect(0, 0, w, h);
            function drawCell(d, rowIndex) {
                return function drawEach(header, headerIndex) {
                    var cellStyle = header.style || 'cell',
                        childGridAttributes,
                        cell,
                        selected = selections[rowIndex] && selections[rowIndex].indexOf(headerIndex) !== -1,
                        hovered = hovers[d[uniqueId]] && hovers[d[uniqueId]].indexOf(headerIndex) !== -1,
                        active = activeCell[1] === rowIndex && activeCell[0] === headerIndex,
                        isGrid = Array.isArray(d[header.name]),
                        val,
                        f = formatters[header.type || 'string'],
                        orderByArrowSize = 0,
                        treeArrowSize = 0,
                        cellWidth = sizes.columns[cellStyle  === 'rowHeaderCell'
                            ? 'cornerCell' : header[uniqueId]] || header.width;
                    if (active) {
                        cellStyle = 'activeCell';
                    }
                    if (visibleRows.indexOf(rowIndex) === -1
                            && ['headerCell', 'cornerCell'].indexOf(cellStyle) === -1) {
                        visibleRows.push(rowIndex);
                    }
                    val = dispatchEvent('formatcellvalue', [ctx, d[header.name], d, header, cx, cy], intf);
                    if (!dispatchEvent('beforerendercell', [ctx, d[header.name], d, header, cx, cy], intf)) {
                        cx = x - scrollBox.scrollLeft;
                        cy = y;
                        if (cellStyle === 'cornerCell') {
                            cx = 0;
                            cy = 0;
                        } else if (cellStyle === 'rowHeaderCell') {
                            cx = 0;
                        } else if (cellStyle === 'headerCell') {
                            cy = 0;
                        }
                        cell = {
                            type: header.type,
                            style: cellStyle,
                            x: cx,
                            y: cy,
                            active: active === true,
                            hovered: hovered === true,
                            selected: selected === true,
                            width: cellWidth,
                            height: cellHeight,
                            data: d,
                            isHeader: /headerCell|cornerCell/.test(cellStyle),
                            isRowHeader: 'rowHeaderCell' === cellStyle,
                            rowOpen: rowOpen,
                            header: header,
                            index: headerIndex,
                            columnIndex: headerIndex,
                            rowIndex: rowIndex,
                            container: container,
                            isGrid: isGrid,
                            gridId: (args.name || '') + d[uniqueId] + ':' + header[uniqueId],
                            parentGrid: intf,
                            value: cellStyle === 'headerCell'
                                ? (header.title || header.name) : d[header.name]
                        };
                        cell.userHeight = cell.isHeader ? sizes.rows[-1] : rowHeight;
                        cell.userWidth = cell.isHeader ? sizes.columns.cornerCell : sizes.columns[header[uniqueId]];
                        cell[uniqueId] = d[uniqueId];
                        visibleCells.unshift(cell);
                        ctx.fillStyle = style[cellStyle + 'BackgroundColor'];
                        ctx.strokeStyle = style[cellStyle + 'BorderColor'];
                        if (hovered) {
                            ctx.fillStyle = style[cellStyle + 'HoverBackgroundColor'];
                            ctx.strokeStyle = style[cellStyle + 'HoverBorderColor'];
                        }
                        if (selected) {
                            ctx.fillStyle = style[cellStyle + 'SelectedBackgroundColor'];
                            ctx.strokeStyle = style[cellStyle + 'SelectedBorderColor'];
                        }
                        dispatchEvent('rendercell', [ctx, cell], intf);
                        if (cell.isGrid) {
                            if (cell.height !== rowHeight) {
                                cell.height = rowHeight || style.cellHeightWithChildGrid;
                                checkScrollHeight = true;
                            }
                            cell.width = sizes.columns[header[uniqueId]] || style.cellWidthWithChildGrid;
                        }
                        if (rowOpen && !cell.isRowHeader) {
                            cell.height = childGrids[d[uniqueId]].originalRowHeight;
                        }
                        ctx.fillRect(cx, cy, cell.width, cell.height);
                        ctx.strokeRect(cx, cy, cell.width, cell.height);
                        ctx.save();
                        ctx.rect(cx, cy, cell.width, cell.height);
                        ctx.clip();
                        dispatchEvent('afterrendercell', [ctx, cell], intf);
                        if (cell.height !== cellHeight && !(rowOpen && !cell.isRowHeader)) {
                            sizes.rows[cellStyle === 'headerCell' ? -1 : d[uniqueId]] = cell.height;
                            checkScrollHeight = true;
                        }
                        if (cell.width !== cellWidth) {
                            sizes.columns[header[uniqueId]] = cell.width;
                            checkScrollHeight = true;
                        }
                        if (cellStyle === 'rowHeaderCell' && attributes.tree) {
                            if (!dispatchEvent('rendertreearrow', [ctx, cell], intf)) {
                                treeArrowSize = drawTreeArrow(cell, style[cellStyle + 'PaddingLeft'], cy, 0);
                            }
                        }
                        if ((attributes.showRowNumbers && cellStyle === 'rowHeaderCell')
                                || cellStyle !== 'rowHeaderCell') {
                            if (cell.isGrid) {
                                if (!childGrids[cell.gridId]) {
                                    childGridAttributes = args.childGridAttributes || {};
                                    childGridAttributes.name = attributes.saveAppearance ? cell.gridId : undefined;
                                    childGridAttributes.parentNode = cell;
                                    childGridAttributes.data = d[header.name];
                                    childGrids[cell.gridId] = grid(childGridAttributes);
                                    dispatchEvent('rendercellgrid', [ctx, cell, childGrids[cell.gridId]], intf);
                                    checkScrollHeight = true;
                                    requestAnimationFrame(draw);
                                }
                                cell.grid = childGrids[cell.gridId];
                                cell.grid.visible = true;
                                cell.grid.childGridContainer.style.top = position(container).top + cell.y + 'px';
                                cell.grid.childGridContainer.style.left = position(container).left + cell.x + 'px';
                                cell.grid.childGridContainer.style.display = 'block';
                                cell.grid.childGridContainer.style.visibility = 'visible';
                            } else {
                                ctx.font = style[cellStyle + 'Font'];
                                val = val !== undefined ? val : f
                                    ? f(ctx, cell) : '';
                                if (val === undefined && !f) {
                                    val = '';
                                    console.warn('canvas-datagrid: I don\'t know how to format a '
                                        + header.type + ' add a cellFormater');
                                }
                                if (cellStyle === 'headerCell' && orderBy === header.name) {
                                    if (!dispatchEvent('renderorderbyarrow', [ctx, cell], intf)) {
                                        orderByArrowSize = drawOrderByArrow(cx + style[cellStyle + 'PaddingLeft'], 0);
                                    }
                                }
                                ctx.fillStyle = style[cellStyle + 'Color'];
                                if (hovered) {
                                    ctx.fillStyle = style[cellStyle + 'HoverColor'];
                                }
                                if (selected) {
                                    ctx.fillStyle = style[cellStyle + 'SelectedColor'];
                                }
                                if (header.name === filterBy && filterValue !== '' && cellStyle === 'headerCell') {
                                    val = style.filterTextPrefix + val;
                                }
                                cell.formattedValue = (val || '').toString();
                                dispatchEvent('rendertext', [ctx, cell], intf);
                                ctx.fillText(addEllipsis(cell.formattedValue, cell.width - style[cellStyle + 'PaddingRight'] - orderByArrowSize - style.autosizePadding),
                                    treeArrowSize + orderByArrowSize + cx + style[cellStyle + 'PaddingLeft'],
                                    cy - (cell.height * 0.5) + style[cellStyle + 'PaddingTop'] + cell.height);
                            }
                        }
                        ctx.restore();
                        x += cell.width + borderWidth;
                    }
                };
            }
            function drawRowHeader(rowData, index) {
                var a;
                if (attributes.showRowHeaders) {
                    x = 0;
                    rowHeaderCell = {'rowHeaderCell': index + 1 };
                    rowHeaderCell[uniqueId] = rowData[uniqueId];
                    a = {
                        name: 'rowHeaderCell',
                        width: style.headerRowWidth,
                        style: 'rowHeaderCell',
                        type: 'string',
                        index: -1
                    };
                    a[uniqueId] = rowData[uniqueId];
                    drawCell(rowHeaderCell, index)(a, -1);
                }
            }
            function drawRow(r) {
                rd = data[r];
                rowHeight = sizes.rows[rd[uniqueId]];
                rowOpen = openChildren[rd[uniqueId]];
                if ((y - cellHeight > h)
                        || (r < scrollIndexTop)
                        || (y < cellHeight * -1)) {
                    return;
                }
                cellHeight = rowHeight || (rowOpen ? style.treeGridHeight : style.cellHeight);
                if (attributes.showRowHeaders) {
                    x = headerCellWidth;
                }
                s.forEach(drawCell(rd, r));
                drawRowHeader(rd, r);
                // cell height might have changed during drawing
                cellHeight = rowHeight || (rowOpen ? style.treeGridHeight : style.cellHeight);
                x = 0;
                // don't draw a tree for the new row
                if (r !== data.length - 1 && rowOpen) {
                    treeGrid = childGrids[rd[uniqueId]];
                    treeGrid.visible = true;
                    treeGrid.childGridContainer.style.top =
                        position(container).top + y + treeGrid.originalRowHeight + 'px';
                    treeGrid.childGridContainer.style.left = scrollLeft +
                        position(container).left + x + headerCellWidth + 'px';
                    treeGrid.childGridContainer.style.display = 'block';
                    treeGrid.childGridContainer.style.visibility = 'visible';
                }
                y += cellHeight + borderWidth;
            }
            Object.keys(childGrids).forEach(function (gridId) {
                childGrids[gridId].visible = false;
            });
            for (r = scrollIndexTop; r < l; r += 1) {
                drawRow(r);
            }
            Object.keys(childGrids).forEach(function (gridId) {
                if (!childGrids[gridId].visible) {
                    childGrids[gridId].childGridContainer.style.display = 'none';
                    childGrids[gridId].childGridContainer.style.visibility = 'hidden';
                    childGrids[gridId].hideChildGrids();
                }
            });
            if (attributes.showNewRow) {
                if (attributes.showRowHeaders) {
                    x = headerCellWidth;
                }
                s.forEach(function forEachHeader(header, index) {
                    drawCell(newRow, data.length)(header, index);
                });
                drawRowHeader(newRow, data.length);
            }
            y = 0;
            if (attributes.showHeaders) {
                if (attributes.showRowHeaders) {
                    x = headerCellWidth;
                }
                // cell height might have changed during drawing
                cellHeight = getHeaderCellHeight();
                s.forEach(function forEachHeader(header, index) {
                    var d = {
                        title: header.title,
                        name: header.name,
                        width: header.width,
                        style: 'headerCell',
                        type: 'string',
                        index: index
                    }, headerCell = {'headerCell': header.title || header.name};
                    headerCell[uniqueId] = 'h' + header[uniqueId];
                    d[uniqueId] = header[uniqueId];
                    drawCell(headerCell, -1)(d, index);
                });
                if (attributes.showRowHeaders) {
                    x = 0;
                    cornerCell = {'cornerCell': '' };
                    cornerCell[uniqueId] = 'cornerCell';
                    c = {
                        name: 'cornerCell',
                        width: style.headerRowWidth,
                        style: 'cornerCell',
                        type: 'string',
                        index: -1
                    };
                    c[uniqueId] = 'cornerCell';
                    drawCell(cornerCell, -1)(c, -1);
                }
            }
            if (checkScrollHeight) {
                setScrollArea();
            }
            if (attributes.showPerformance) {
                ctx.fillStyle = 'black';
                ctx.strokeStyle = 'white';
                p = (performance.now() - p).toFixed(2) + 'ms';
                ctx.font = '33px sans-serif';
                ctx.fillText(p, w - (w / 5), h - (h / 10));
                ctx.strokeText(p, w - (w / 5), h - (h / 10));
            }
        }
        function resize() {
            var pos = position(container),
                h,
                headerCellHeight = getHeaderCellHeight(),
                headerCellWidth = getHeaderCellWidth(),
                headerCellBorder =  style.headerCellBorderWidth * 2;
            h = (attributes.height === undefined ?
                    Math.min(container.parentNode.offsetHeight, window.innerHeight) : attributes.height);
            if (attributes.maxHeight !== undefined && h > attributes.maxHeight) {
                h = attributes.maxHeight;
            }
            if (h < style.minHeight) {
                h = style.minHeight;
            }
            if (dispatchEvent('resize', [h, width], intf)) { return false; }
            container.style.height = h + 'px';
            container.style.width = container.parentNode.offsetWidth + 'px';
            height = container.offsetHeight;
            width = container.offsetWidth;
            scrollBox.style.width = container.offsetWidth - headerCellWidth + 'px';
            scrollBox.style.height = container.offsetHeight - headerCellHeight - headerCellBorder
                + style.scrollDivOverlap + 'px';
            scrollBox.style.top = headerCellHeight + headerCellBorder
                - style.scrollDivOverlap + 'px';
            scrollBox.style.left = headerCellWidth + 'px';
            draw();
            clipChildGrids();
            return true;
        }
        function getClippingRect(ele) {
            var boundingRect = position(container),
                eleRect = position(ele),
                clipRect = {
                    x: 0,
                    y: 0,
                    h: 0,
                    w: 0
                },
                parentRect = isChildGrid ? parentGrid.getClippingRect(ele) : {
                    x: -Infinity,
                    y: -Infinity,
                    h: Infinity,
                    w: Infinity
                },
                headerCellHeight = getHeaderCellHeight(),
                headerCellWidth = getHeaderCellWidth();
            clipRect.h = boundingRect.top + boundingRect.height - ele.offsetTop - style.scrollBarWidth;
            clipRect.w = boundingRect.left + boundingRect.width - ele.offsetLeft - style.scrollBarWidth;
            clipRect.x = boundingRect.left + (eleRect.left * -1) + headerCellWidth;
            clipRect.y = boundingRect.top + (eleRect.top * -1) + headerCellHeight;
            return {
                x: clipRect.x > parentRect.x ? clipRect.x : parentRect.x,
                y: clipRect.y > parentRect.y ? clipRect.y : parentRect.y,
                h: clipRect.h < parentRect.h ? clipRect.h : parentRect.h,
                w: clipRect.w < parentRect.w ? clipRect.w : parentRect.w
            };
        }
        function clipElement(ele) {
            var clipRect = getClippingRect(ele);
            if (clipRect.w < 0) { clipRect.w = 0; }
            if (clipRect.h < 0) { clipRect.h = 0; }
            // TODO: this rect must be created by passing to all parent grids first
            ele.style.clip = 'rect('
                + clipRect.y + 'px,'
                + clipRect.w + 'px,'
                + clipRect.h + 'px,'
                + clipRect.x + 'px'
                + ')';
            // INFO https://developer.mozilla.org/en-US/docs/Web/CSS/clip
            // clip has been "deprecated" for clipPath.  Of course nothing but chrome
            // supports clip path, so we'll keep using clip until someday clipPath becomes
            // more widely support.  The code below works correctly, but setting clipPath and clip
            // at the same time has undesirable results.
            // ele.style.clipPath = 'polygon('
            //     + clipRect.x + 'px ' + clipRect.y + 'px,'
            //     + clipRect.x + 'px ' + clipRect.h + 'px,'
            //     + clipRect.w + 'px ' + clipRect.h + 'px,'
            //     + clipRect.w + 'px ' + clipRect.y + 'px'
            //     + ')';
        }
        function selectRow(rowIndex, ctrl, supressEvent) {
            var s = getSchema();
            if (selections[rowIndex] && selections[rowIndex].length === data.length && ctrl) {
                selections[rowIndex] = [];
                return;
            }
            selections[rowIndex] = [];
            selections[rowIndex].push(-1);
            s.forEach(function (col) {
                selections[rowIndex].push(col.index);
            });
            if (supressEvent) { return; }
            dispatchEvent('selectionchanged', [getSelectedData(), selections, selectionBounds], intf);
        }
        function collapseTree(rowIndex) {
            var rowId = data[rowIndex][uniqueId];
            dispatchEvent('collapsetree', [childGrids[rowId], data[rowIndex], rowIndex], intf);
            openChildren[rowId] = undefined;
            sizes.rows[rowId] = childGrids[rowId].originalRowHeight;
            dispatchEvent('resizerow', [style.cellHeight], intf);
            setScrollArea();
            childGrids[rowId].visible = false;
            draw();
            clipChildGrids();
        }
        function expandTree(rowIndex) {
            var headerCellHeight = getHeaderCellHeight(),
                headerCellWidth = sizes.columns.cornerCell || style.headerRowWidth,
                rowId = data[rowIndex][uniqueId],
                h = sizes.rows[rowId] || (style.treeGridHeight - style.cellHeight - headerCellHeight);
            if (!childGrids[rowId]) {
                childGrids[rowId] = grid({
                    name: attributes.saveAppearance
                        ? args.name + 'tree' + rowId : undefined,
                    height: h,
                    width: canvas.offsetWidth - headerCellWidth,
                    parentNode: {
                        parentGrid: intf,
                        container: container,
                        height: h,
                        width: canvas.offsetWidth - headerCellWidth,
                        header: { width: canvas.offsetWidth - headerCellWidth },
                        style: 'tree',
                        data: data[rowIndex],
                    }
                });
            }
            childGrids[rowId].visible = true;
            childGrids[rowId].originalRowHeight = sizes.rows[data[rowIndex][uniqueId]] || style.cellHeight;
            dispatchEvent('expandtree', [childGrids[rowId], data[rowIndex], rowIndex], intf);
            openChildren[data[rowIndex][uniqueId]] = childGrids[rowId];
            sizes.rows[data[rowIndex][uniqueId]] = style.treeGridHeight + childGrids[rowId].originalRowHeight;
            dispatchEvent('resizerow', [style.cellHeight], intf);
            setScrollArea();
            draw();
            clipChildGrids();
        }
        function toggleTree(rowIndex) {
            var i = openChildren[data[rowIndex][uniqueId]];
            if (i) {
                return collapseTree(rowIndex);
            }
            expandTree(rowIndex);
        }
        function clipChildGrids() {
            Object.keys(childGrids).forEach(function (gridId) {
                var i = childGrids[gridId];
                if (isChildGrid && intf.childGridContainer.style.visibility === 'hidden') {
                    i.childGridContainer.style.visibility = 'hidden';
                } else {
                    i.childGridContainer.style.visibility = 'visible';
                    clipElement(i.childGridContainer);
                }
            });
        }
        function scroll() {
            var pos = position(container),
                cellBorder = style.cellBorderWidth * 2;
            scrollIndexTop = 0;
            scrollPixelTop = 0;
            while (scrollPixelTop < scrollBox.scrollTop) {
                scrollPixelTop += (sizes.rows[data[scrollIndexTop][uniqueId]] || style.cellHeight)
                    + cellBorder;
                scrollIndexTop += 1;
            }
            scrollIndexTop = Math.max(scrollIndexTop - 1, 0);
            scrollPixelTop = Math.max(scrollPixelTop
                - (sizes.rows[data[scrollIndexTop][uniqueId]] || style.cellHeight), 0);
            ellipsisCache = {};
            hideChildGrids();
            draw();
            if (input) {
                input.style.top = pos.top + scrollEdit.inputTop
                    + (scrollEdit.scrollTop - scrollBox.scrollTop) + 'px';
                input.style.left = pos.left + scrollEdit.inputLeft
                    + (scrollEdit.scrollLeft - scrollBox.scrollLeft) + 'px';
                clipElement(input);
            }
            clipChildGrids();
            dispatchEvent('scroll', [{top: scrollBox.scrollTop, left: scrollBox.scrollLeft }], intf);
        }
        function getHeaderByName(name) {
            var x, i = getSchema();
            for (x = 0; x < i.length; x += 1) {
                if (i[x].name === name) {
                    return i[x];
                }
            }
        }
        function fitColumnToValues(name) {
            sizes.columns[name === 'cornerCell' ? name : getHeaderByName(name)[uniqueId]]
                = findColumnMaxTextLength(name);
            draw();
        }
        sorters.string = function (columnName, asc) {
            var asc = direction === 'asc';
            return function (a, b) {
                if (a[columnName] === undefined || a[columnName] === null
                        || b[columnName] === undefined || b[columnName] === null) {
                    return false;
                }
                if (asc) {
                    if (!a[columnName].localeCompare) { return false; }
                    return a[columnName].localeCompare(b[columnName]);
                }
                return b[columnName].localeCompare(a[columnName]);
            };
        };
        sorters.number = function (columnName, direction) {
            var asc = direction === 'asc';
            return function (a, b) {
                if (asc) {
                    return a[columnName] - b[columnName];
                }
                return b[columnName] - a[columnName];
            };
        };
        sorters.date = function (columnName, direction) {
            var asc = direction === 'asc';
            return function (a, b) {
                if (asc) {
                    return new Date(a[columnName]).getTime()
                        - new Date(b[columnName]).getTime();
                }
                return new Date(b[columnName]).getTime()
                        - new Date(a[columnName]).getTime();
            };
        };
        function order(columnName, direction) {
            var f,
                c = getSchema().filter(function (col) {
                    return col.name === columnName;
                });
            orderBy = columnName;
            if (c.length === 0) {
                throw new Error('Cannot sort.  No such column name');
            }
            f = sorters[c[0].type];
            if (!f) {
                console.warn('Cannot sort type "%s" falling back to string sort.', c[0].type);
            }
            data = data.sort(f(columnName, direction) || sorters.string);
            dispatchEvent('ordercolumn', [columnName, direction], intf);
            draw();
        }
        function getCellAt(x, y) {
            if (!visibleCells || !visibleCells.length) { return; }
            var i, l = visibleCells.length, cell;
            for (i = 0; i < l; i += 1) {
                cell = visibleCells[i];
                if (cell.x < x
                        && cell.x + cell.width + attributes.borderResizeZone > x
                        && cell.y < y
                        && cell.y + cell.height > y) {
                    if (cell.x + cell.width - (attributes.borderResizeZone * 0.5) < x
                            && cell.x + cell.width + (attributes.borderResizeZone * 0.5) > x
                            && attributes.allowColumnResize
                            && ((attributes.allowColumnResizeFromCell && cell.style === 'cell')
                                || cell.style !== 'cell')
                            && ((attributes.allowRowHeaderResize
                                && ['rowHeaderCell', 'cornerCell'].indexOf(cell.style) !== -1)
                                || ['rowHeaderCell', 'cornerCell'].indexOf(cell.style) === -1)) {
                        cell.context = 'ew-resize';
                        return cell;
                    }
                    if (cell.y + cell.height - (attributes.borderResizeZone * 0.5) < y
                            && cell.y + cell.height + (attributes.borderResizeZone * 0.5) > y
                            && attributes.allowRowResize
                            && ((attributes.allowRowResizeFromCell && cell.style === 'cell')
                                || cell.style !== 'cell')
                            && cell.style !== 'headerCell') {
                        cell.context = 'ns-resize';
                        return cell;
                    }
                    cell.context = 'cell';
                    return cell;
                }
            }
            return {
                context: 'inherit'
            };
        }
        function mousemove(e) {
            if (contextMenu || input) {
                return;
            }
            var i,
                dragBounds,
                x = e.clientX - position(container).left,
                y = e.clientY - position(container).top,
                o = getCellAt(x, y);
            currentCell = o;
            if (o.grid !== undefined) {
                return;
            }
            hovers = {};
            if (!resizingItem && o) {
                resizeItem = o;
                resizeMode = o.context;
                container.style.cursor = o.context;
                if (o.context === 'cell') {
                    container.style.cursor = 'pointer';
                    hovers[o.data[uniqueId]] = [o.index];
                }
                if (selecting
                        && o.context === 'cell'
                        && o.data) {
                    dragBounds = {
                        top: Math.min(dragStartObject.rowIndex, o.rowIndex),
                        left: Math.min(dragStartObject.columnIndex, o.columnIndex),
                        bottom: Math.max(dragStartObject.rowIndex, o.rowIndex),
                        right: Math.max(dragStartObject.columnIndex, o.columnIndex)
                    };
                    if (dragStartObject.rowIndex !== o.rowIndex
                                || dragStartObject.columnIndex !== o.columnIndex) {
                        ignoreNextClick = true;
                    }
                    if (!selectionBounds || (dragBounds.top !== selectionBounds.top
                            || dragBounds.left !== selectionBounds.left
                            || dragBounds.bottom !== selectionBounds.bottom
                            || dragBounds.right !== selectionBounds.right)) {
                        selectionBounds = dragBounds;
                        selectArea();
                        if (attributes.rowSelectionMode) {
                            for (i = selectionBounds.top; i <= selectionBounds.bottom; i += 1) {
                                selectRow(i, false, true);
                            }
                        }
                    }
                }
            }
            if (dispatchEvent('mousemove', [e, o], intf)) { return; }
            draw();
        }
        function dataFilter(row) {
            return (filterBy === '' && filterValue === '') ||
                currentFilter(row[filterBy], filterValue);
        }
        function disposeContextMenu(e) {
            //TODO: there are most likely some bugs around removing the context menu.  Can't use grid on first click sometimes
            function disp() {
                contextMenu = undefined;
                container.cursor = 'pointer';
                document.body.removeEventListener('click', disposeContextMenu);
                document.body.removeEventListener('mouseup', disp);
                document.body.removeEventListener('mousedown', disp);
            }
            if (!e || (contextMenu
                                && contextMenu.parentNode
                                && !contextMenu.contains(e.target))) {
                contextMenu.parentNode.removeChild(contextMenu);
                document.body.addEventListener('mouseup', disp);
                document.body.addEventListener('mousedown', disp);
            }
        }
        function refreshFromOrigialData() {
            data = originalData.filter(function (row) {
                return true;
            });
        }
        function setFilter(column, value) {
            var header;
            filterBy = column;
            filterValue = value;
            if (!column || value === '') {
                refreshFromOrigialData();
            }
            header = getHeaderByName(column);
            if (!header) {
                return;
            }
            currentFilter = header.filter;
            data = originalData.filter(function (row) {
                return currentFilter(row[filterBy], filterValue);
            });
            setScrollArea();
            draw();
        }
        function contextmenu(e) {
            if (contextMenu) {
                e.preventDefault();
                return disposeContextMenu();
            }
            var sOffset = scrollOffset(container),
                pos = {
                    x: e.clientX - position(container).left,
                    y: e.clientY - position(container).top
                },
                contextObject = getCellAt(pos.x, pos.y),
                filterContainer,
                filterLabel,
                filterInput,
                menuItems;
            if (contextObject.grid !== undefined) {
                return;
            }
            if (!contextObject.header) { e.preventDefault(); return; }
            filterContainer = document.createElement('div');
            filterLabel = document.createElement('div');
            filterLabel.className = 'canvas-datagrid-context-menu-label';
            filterInput = document.createElement('input');
            filterLabel.innerHTML = 'Filter';
            filterContainer.appendChild(filterLabel);
            filterContainer.appendChild(filterInput);
            contextMenu = document.createElement('div');
            contextMenu.className = 'canvas-datagrid-context-menu';
            contextMenu.style.cursor = 'pointer';
            contextMenu.style.position = 'absolute';
            contextMenu.style.zIndex = '3';
            contextMenu.style.top = e.clientY - sOffset.top + style.contextMenuMarginTop + 'px';
            contextMenu.style.left = e.clientX - sOffset.left + style.contextMenuMarginLeft + 'px';
            filterInput.value = filterValue || '';
            menuItems = [];
            if (attributes.showFilter) {
                menuItems.push({
                    title: filterContainer
                });
                if (filterValue) {
                    menuItems.push({
                        title: 'Remove Filter',
                        click: function removeFilterClick() {
                            e.preventDefault();
                            setFilter();
                            disposeContextMenu();
                            controlInput.focus();
                        }
                    });
                }
            }
            if (attributes.saveAppearance
                    && (Object.keys(sizes.rows).length > 0
                        || Object.keys(sizes.columns).length > 0)) {
                menuItems.push({
                    title: 'Reset column and row sizes',
                    click: function (e) {
                        e.preventDefault();
                        sizes = {
                            rows: {},
                            columns: {},
                        };
                        dispatchEvent('resizecolumn', [style.columnWidth], intf);
                        dispatchEvent('resizerow', [style.cellHeight], intf);
                        setStorageData();
                        draw();
                        clipChildGrids();
                        resize();
                        disposeContextMenu();
                        controlInput.focus();
                    }
                });
            }
            if (attributes.allowColumnReordering) {
                menuItems.push({
                    title: 'Order by ' + contextObject.header.name + ' ascending',
                    click: function (e) {
                        e.preventDefault();
                        order(contextObject.header.name, 'asc');
                        disposeContextMenu();
                        controlInput.focus();
                    }
                });
                menuItems.push({
                    title: 'Order by ' + contextObject.header.name + ' descending',
                    click: function (e) {
                        e.preventDefault();
                        order(contextObject.header.name, 'desc');
                        disposeContextMenu();
                        controlInput.focus();
                    }
                });
            }
            if (dispatchEvent('contextmenu', [e, contextObject, menuItems, contextMenu], intf)) { return; }
            if (!menuItems.length) {
                return;
            }
            menuItems.forEach(function (item) {
                var row = document.createElement('div');
                contextMenu.appendChild(row);
                if (typeof item.title === 'string') {
                    row.className = 'canvas-datagrid-context-menu-item';
                    row.innerHTML = item.title;
                } else {
                    row.appendChild(item.title);
                }
                if (item.click) {
                    row.addEventListener('click', function contextClickProxy(e) {
                        item.click.apply(this, [e, contextObject, disposeContextMenu]);
                        e.preventDefault();
                        e.stopPropagation();
                        controlInput.focus();
                    });
                }
            });
            filterInput.addEventListener('dblclick', stopPropagation);
            filterInput.addEventListener('click', stopPropagation);
            filterInput.addEventListener('mousedown', stopPropagation);
            filterInput.addEventListener('keyup', function filterKeyUp() {
                setFilter(contextObject.header.name, filterInput.value);
                requestAnimationFrame(function filterRequestAnimationFrame() {
                    filterInput.classList.remove(invalidSearchExpClass);
                    if (invalidFilterRegEx) {
                        filterInput.classList.add(invalidSearchExpClass);
                    }
                });
            });
            document.body.addEventListener('click', disposeContextMenu);
            document.body.appendChild(contextMenu);
            e.preventDefault();
        }
        function getSelectionBounds() {
            var low = {x: Infinity, y: Infinity},
                high = {x: -Infinity, y: -Infinity};
            data.forEach(function (row, rowIndex) {
                var maxCol, minCol;
                if (selections[rowIndex] && selections[rowIndex].length) {
                    low.y = rowIndex < low.y ? rowIndex : low.y;
                    high.y = rowIndex > high.y ? rowIndex : high.y;
                    maxCol = Math.max.apply(null, selections[rowIndex]);
                    minCol = Math.min.apply(null, selections[rowIndex]);
                    low.x = minCol < low.x ? minCol : low.x;
                    high.x = maxCol > high.x ? maxCol : high.x;
                }
            });
            return {
                top: low.y,
                left: low.x,
                bottom: high.y,
                right: high.x
            };
        }
        function findRowScrollTop(rowIndex) {
            var top = 0, x = 0, l = data.length,
                cellBorder = style.cellBorderWidth * 2;
            if (!attributes.showNewRow) {
                l -= 1;
            }
            if (rowIndex > l) {
                throw new Error('Impossible row index');
            }
            while (x < rowIndex) {
                top += (sizes.rows[data[x][uniqueId]] || style.cellHeight) + cellBorder;
                x += 1;
            }
            //TODO: This is not super accurate, causes pageUp/Dn to not move around right
            return top - (sizes.rows[data[rowIndex][uniqueId]] || style.cellHeight);
        }
        function findColumnScrollLeft(columnIndex) {
            var left = 0, y = 0, s = getSchema(), l = s.length - 1;
            if (columnIndex > l) {
                throw new Error('Impossible column index');
            }
            while (y < columnIndex) {
                left += sizes.columns[s[y][uniqueId]] || s[y].width;
                y += 1;
            }
            return left;
        }
        function gotoCell(x, y) {
            if (x !== undefined) {
                scrollBox.scrollLeft = findColumnScrollLeft(x);
            }
            if (y !== undefined) {
                scrollBox.scrollTop = findRowScrollTop(y);
            }
        }
        function gotoRow(y) {
            gotoCell(0, y);
        }
        function scrollIntoView(x, y) {
            if (visibleCells.filter(function (cell) {
                    return (cell.rowIndex === y || y === undefined)
                        && (cell.columnIndex === x || x === undefined)
                        && cell.x > 0
                        && cell.y > 0
                        && cell.x + cell.width < container.offsetWidth
                        && cell.y + cell.height < container.offsetHeight;
                }).length === 0) {
                gotoCell(x, y);
            }
        }
        function setActiveCell(x, y) {
            activeCell = [x, y];
        }
        function insertColumn(c, index) {
            var s = getSchema();
            if (s.length < index) {
                throw new Error('Index is beyond the length of the schema.');
            }
            intf.schema = s.splice(index, 0, c);
        }
        function deleteColumn(index) {
            var s = getSchema();
            intf.schema = s.splice(index, 1);
        }
        function addColumn(c) {
            var s = getSchema();
            intf.schema = s.push(c);
        }
        function deleteRow(index) {
            originalData.splice(index, 1);
            setFilter(filterBy, filterValue);
            setScrollArea();
        }
        function insertRow(d, index) {
            if (originalData.length < index) {
                throw new Error('Index is beyond the length of the dataset.');
            }
            originalData.splice(index, 0, d);
            setFilter(filterBy, filterValue);
            setScrollArea();
        }
        function addRow(d) {
            originalData.push(d);
            setFilter(filterBy, filterValue);
            setScrollArea();
        }
        function endEdit(abort) {
            var cell = input.editCell,
                y = cell.rowIndex;
            function abortEdit() {
                abort = true;
            }
            if (dispatchEvent('beforeendedit', [input.value, cell.value,
                    abortEdit, cell, input], intf)) { return false; }
            if (input.value !== cell.value && !abort) {
                changes[y] = changes[y] || {};
                changes[y][cell.header.name] = input.value;
                cell.data[cell.header.name] = input.value;
                if (y === data.length) {
                    if (dispatchEvent('newrow', [input.value, cell.value,
                            abort, cell, input], intf)) { return false; }
                    uId += 1;
                    addRow(cell.data);
                    createNewRowData();
                }
                draw();
            }
            document.body.removeChild(input);
            controlInput.focus();
            dispatchEvent('endedit', [input.value, abort, cell, input], intf);
            input = undefined;
            return true;
        }
        function beginEditAt(x, y) {
            if (!attributes.editable) { return; }
            var top, left, cell, s = getVisibleSchema();
            cell = visibleCells.filter(function (vCell) {
                return vCell.columnIndex === x && vCell.rowIndex === y;
            })[0];
            if (dispatchEvent('beforebeginedit', [cell], intf)) { return false; }
            scrollIntoView(x, y);
            setActiveCell(x, y);
            function postDraw() {
                var pos = position(container);
                cell = visibleCells.filter(function (vCell) {
                    return vCell.columnIndex === x && vCell.rowIndex === y;
                })[0];
                top = cell.y + style.cellBorderWidth;
                left = cell.x + style.cellBorderWidth;
                scrollEdit = {
                    scrollTop: scrollBox.scrollTop,
                    scrollLeft: scrollBox.scrollLeft,
                    inputTop: top,
                    inputLeft: left
                };
                input = document.createElement(attributes.multiLine ? 'textarea' : 'input');
                document.body.appendChild(input);
                input.className = 'canvas-datagrid-edit-input';
                input.style.position = 'absolute';
                input.style.border = 'none';
                input.style.top = pos.top + top + 'px';
                input.style.left = pos.left + left + 'px';
                input.style.height = cell.height - (style.cellBorderWidth * 2) + 'px';
                input.style.width = cell.width - (style.cellBorderWidth * 2)
                    - style.cellPaddingLeft + 'px';
                input.style.zIndex = '2';
                input.value = cell.value;
                input.editCell = cell;
                clipElement(input);
                input.focus();
                input.addEventListener('click', stopPropagation);
                input.addEventListener('dblclick', stopPropagation);
                input.addEventListener('mouseup', stopPropagation);
                input.addEventListener('mousedown', stopPropagation);
                input.addEventListener('keydown', function (e) {
                    var nx = cell.columnIndex,
                        ny = cell.rowIndex;
                    // esc
                    if (e.keyCode === 27) {
                        endEdit(true);
                        draw();
                    // enter
                    } else if (e.keyCode === 13) {
                        endEdit();
                        draw();
                    } else if (e.keyCode === 9) {
                        e.preventDefault();
                        if (!endEdit()) {
                            return;
                        }
                        if (e.shiftKey) {
                            nx -= 1;
                        } else {
                            nx += 1;
                        }
                        if (nx < 0) {
                            nx = s.length - 1;
                            ny -= 1;
                        }
                        if (nx > s.length - 1) {
                            nx = 0;
                            ny += 1;
                        }
                        if (ny < 0) {
                            ny = data.length - 1;
                        }
                        if (ny > data.length - 1) {
                            ny = 0;
                        }
                        beginEditAt(nx, ny);
                    }
                });
            }
            requestAnimationFrame(postDraw);
            dispatchEvent('beginedit', [cell, input], intf);
        }
        function click(e) {
            var index,
                i,
                selectionChanged,
                ctrl = (e.controlKey || e.metaKey || attributes.persistantSelectionMode),
                pos = {
                    x: e.clientX - position(container).left,
                    y: e.clientY - position(container).top
                };
            currentCell = getCellAt(pos.x, pos.y);
            if (currentCell.grid !== undefined) {
                return;
            }
            function checkSelectionChange() {
                if (!selectionChanged) { return; }
                dispatchEvent('selectionchanged',
                    [getSelectedData(), selections, selectionBounds], intf);
            }
            if (input) {
                endEdit();
            }
            if (ignoreNextClick) {
                ignoreNextClick = false;
                return;
            }
            i = currentCell;
            if (dispatchEvent('click', [e, currentCell], intf)) { return; }
            if (!e.shiftKey && !ctrl) {
                selections = [];
                selectionChanged = true;
            }
            if (currentCell.context === 'cell') {
                if (currentCell.style === 'cornerCell') {
                    order(uniqueId, 'asc');
                    setFilter();
                    checkSelectionChange();
                    return;
                }
                if (currentCell.style === 'headerCell') {
                    if (orderBy === i.header.name) {
                        orderDirection = orderDirection === 'asc' ? 'desc' : 'asc';
                    } else {
                        orderDirection = 'asc';
                    }
                    order(i.header.name, orderDirection);
                    checkSelectionChange();
                    return;
                }
                if (['rowHeaderCell', 'headerCell'].indexOf(currentCell.style) === -1) {
                    setActiveCell(i.columnIndex, i.rowIndex);
                }
                selections[i.rowIndex] = selections[i.rowIndex] || [];
                index = i.selected ? selections[i.rowIndex].indexOf(i.header.index) : -1;
                if (attributes.rowSelectionMode || currentCell.style === 'rowHeaderCell') {
                    if (attributes.tree && pos.x > 0
                            && pos.x - currentCell.x < style.treeArrowWidth
                            + style.treeArrowMarginLeft
                            + style.treeArrowMarginRight
                            && pos.y - currentCell.y < style.treeArrowHeight
                            + style.treeArrowMarginTop
                            && pos.y > 0) {
                        toggleTree(i.rowIndex);
                        return;
                    }
                    selectionChanged = true;
                    selectRow(i.rowIndex, ctrl, true);
                } else {
                    if (index === -1) {
                        selectionChanged = true;
                        selections[i.rowIndex].push(i.columnIndex);
                    }
                }
                if (i.selected && ctrl) {
                    if (attributes.rowSelectionMode) {
                        selections[i.rowIndex] = undefined;
                    }
                    selections[i.rowIndex].splice(selections[i.rowIndex].indexOf(i.columnIndex), 1);
                    selectionChanged = true;
                }
                if (e.shiftKey && !ctrl) {
                    selectionBounds = getSelectionBounds();
                    selectArea();
                }
            }
            checkSelectionChange();
            draw();
        }
        function dragResizeColumn(e) {
            var pos = {
                    x: e.clientX - position(container).left,
                    y: e.clientY - position(container).top
                },
                x = resizingStartingWidth + pos.x - dragStart.x,
                y = resizingStartingHeight + pos.y - dragStart.y;
            if (x < style.minColumnWidth) {
                x = style.minColumnWidth;
            }
            if (y < style.minRowHeight) {
                y = style.minRowHeight;
            }
            if (dispatchEvent('resizecolumn', [x, y, resizingItem], intf)) { return false; }
            if (resizeMode === 'ew-resize') {
                sizes.columns[resizingItem.header.style === 'rowHeaderCell'
                       ? 'cornerCell' : resizingItem.header[uniqueId]] = x;
                if (['rowHeaderCell', 'cornerCell'].indexOf(resizingItem.header.style) !== -1) {
                    resize();
                }
                clipChildGrids();
                return;
            }
            if (resizeMode === 'ns-resize') {
                sizes.rows[resizingItem.data[uniqueId]] = y;
                dispatchEvent('resizerow', [y], intf);
                clipChildGrids();
                return;
            }
            ellipsisCache = {};
        }
        function stopDragResize() {
            setScrollArea();
            document.body.removeEventListener('mousemove', dragResizeColumn, false);
            document.body.removeEventListener('mouseup', stopDragResize, false);
            setStorageData();
            draw();
            ignoreNextClick = true;
        }
        function mousedown(e) {
            if (currentCell && currentCell.grid !== undefined) {
                return;
            }
            if (dispatchEvent('mousedown', [e, currentCell], intf)) { return; }
            if (e.button === 2 || input) { return; }
            dragStart = {
                x: e.clientX - position(container).left,
                y: e.clientY - position(container).top
            };
            dragStartObject = getCellAt(dragStart.x, dragStart.y);
            if (resizeMode === 'cell') {
                selecting = true;
                if (attributes.rowSelectionMode) {
                    selectRow(dragStartObject.rowIndex, false, true);
                }
                return mousemove(e);
            }
            if (['ns-resize', 'ew-resize'].indexOf(resizeMode) !== -1) {
                resizingItem = resizeItem;
                resizingStartingWidth = sizes.columns[resizingItem.header.style === 'rowHeaderCell'
                       ? 'cornerCell' : resizingItem.header[uniqueId]] || resizingItem.header.width;
                resizingStartingHeight = sizes.rows[resizingItem.data[uniqueId]] || style.cellHeight;
                document.body.addEventListener('mousemove', dragResizeColumn, false);
                document.body.addEventListener('mouseup', stopDragResize, false);
            }
        }
        function mouseup(e) {
            if (currentCell.grid !== undefined) {
                return;
            }
            if (dispatchEvent('mouseup', [e, currentCell], intf)) { return; }
            if (contextMenu || input) { return; }
            selecting = undefined;
            resizingItem = undefined;
            controlInput.focus();
        }
        function keydown(e) {
            var x = activeCell[0],
                y = activeCell[1],
                ctrl = (e.controlKey || e.metaKey),
                last = data.length - 1,
                page = visibleRows.length - 3 - attributes.pageUpDownOverlap,
                cols = getVisibleSchema().length - 1;
            if (attributes.showNewRow) {
                last += 1;
            }
            if (dispatchEvent('keydown', [e, currentCell], intf)) { return; }
            if (e.keyCode === 'Tab') {
                e.preventDefault();
            }
            //ArrowDown
            if (e.keyCode === 40) {
                y += 1;
            //ArrowUp
            } else if (e.keyCode === 38) {
                y -= 1;
            //ArrowLeft Tab
            } else if (e.keyCode === 37 || (e.shiftKey && e.keyCode === 9)) {
                x -= 1;
            //ArrowRight Tab
            } else if (e.keyCode === 39 || (!e.shiftKey && e.keyCode === 9)) {
                x += 1;
            //PageUp
            } else if (e.keyCode === 33) {
                y -= page;
            //PageDown
            } else if (e.keyCode === 34) {
                y += page;
            //Home ArrowUp
            } else if (e.keyCode === 36 || (ctrl && e.keyCode === 38)) {
                y = 0;
            //End ArrowDown
            } else if (e.keyCode === 35 || (ctrl && e.keyCode === 40)) {
                y = data.length - 1;
            //ArrowRight
            } else if (ctrl && e.keyCode === 39) {
                x = cols;
            //ArrowLeft
            } else if (ctrl && e.keyCode === 37) {
                x = 0;
            //Enter
            } else if (e.keyCode === 13) {
                return beginEditAt(x, y);
            }
            if (x < 0) {
                x = 0;
            }
            if (y > last) {
                y = last;
            }
            if (y < 0) {
                y = 0;
            }
            if (x > cols) {
                x = cols;
            }
            // Arrows
            if (e.shiftKey && [37, 38, 39, 40].indexOf(e.keyCode) !== -1) {
                selections[data[y][uniqueId]] = selections[data[y][uniqueId]] || [];
                selections[data[y][uniqueId]].push(x);
                selectionBounds = getSelectionBounds();
                selectArea();
                draw();
            }
            if (x !== activeCell[0] || y !== activeCell[1]) {
                scrollIntoView(x !== activeCell[0] ? x : undefined, y !== activeCell[1] ? y : undefined);
                setActiveCell(x, y);
                if (!e.shiftKey && attributes.selectionFollowsActiveCell) {
                    selections = [];
                    selections[data[y][uniqueId]] = [x];
                    dispatchEvent('selectionchanged', [getSelectedData(), selections, selectionBounds], intf);
                }
                draw();
            }
        }
        function keyup(e) {
            if (dispatchEvent('keyup', [e, currentCell], intf)) { return; }
            controlInput.value = '';
        }
        function keypress(e) {
            if (dispatchEvent('keypress', [e, currentCell], intf)) { return; }
        }
        function defaults(obj1, obj2, key, def) {
            obj1[key] = obj2[key] === undefined ? def : obj2[key];
        }
        function setAttributes() {
            defaultAttributes.forEach(function eachAttribute(i) {
                defaults(attributes, args, i[0], i[1]);
            });
        }
        function setStyle() {
            defaultStyles.forEach(function eachStyle(i) {
                defaults(style, args.style || {}, i[0], i[1]);
            });
        }
        function autosize(colName) {
            getVisibleSchema().forEach(function (col) {
                if (col.name === colName || colName === undefined) {
                    fitColumnToValues(col.name);
                }
            });
            fitColumnToValues('cornerCell');
        }
        function dblclick(e) {
            if (currentCell.grid !== undefined) {
                return;
            }
            if (dispatchEvent('dblclick', [e, currentCell], intf)) { return; }
            if (currentCell.context === 'ew-resize'
                    && currentCell.style === 'headerCell') {
                fitColumnToValues(currentCell.header.name);
            } else if (currentCell.context === 'ew-resize'
                    && currentCell.style === 'cornerCell') {
                autosize();
            } else if (['cell', 'activeCell'].indexOf(currentCell.style) !== -1) {
                beginEditAt(currentCell.columnIndex, currentCell.rowIndex);
            }
        }
        function dispose() {
            if (container && container.parentNode) {
                container.parentNode.removeChild(container);
            }
            window.removeEventListener('resize', resize);
        }
        function attachCss() {
            var styleSheet,
                styleSheetBody = [],
                css = {
                    'canvas-datagrid-canvas': {
                        position: 'absolute!important',
                        'z-index': '-1'
                    },
                    'canvas-datagrid-scrollBox': {
                        position: 'absolute!important',
                        overflow: 'auto!important',
                        'z-index': '1!important'
                    },
                    'canvas-datagrid': {
                        position: 'absolute!important',
                        background: style.backgroundColor,
                        'z-index': '1',
                        'box-sizing': 'content-box!important',
                        padding: '0!important'
                    },
                    'canvas-datagrid-control-input': {
                        position: 'absolute!important',
                        border: 'none!important',
                        background: 'transparet!important',
                        opacity: '0!important',
                        cursor: 'pointer!important',
                        width: '1px',
                        height: '1px'
                    },
                    'canvas-datagrid-edit-input': {
                        'box-sizing': 'content-box!important',
                        outline: 'none!important',
                        margin: '0!important',
                        padding: '0 0 0 ' + style.editCellPaddingLeft + 'px!important',
                        'font-size': style.editCellFontSize + '!important',
                        'font-family': style.editCellFontFamily + '!important'
                    },
                    'canvas-datagrid-context-menu-item': {
                        margin: style.contextMenuItemMargin,
                        'border-radius': style.contextMenuItemBorderRadius
                    },
                    'canvas-datagrid-context-menu-item:hover': {
                        background: style.contextMenuHoverBackground,
                        color: style.contextMenuHoverColor,
                        margin: style.contextMenuItemMargin
                    },
                    'canvas-datagrid-context-menu-label': {
                        display: style.contextMenuLabelDisplay,
                        'min-width': style.contextMenuLabelMinWidth
                    },
                    'canvas-datagrid-context-menu': {
                        'font-family': style.contextMenuFontFamily,
                        'font-size': style.contextMenuFontSize,
                        background: style.contextMenuBackground,
                        color: style.contextMenuColor,
                        border: style.contextMenuBorder,
                        padding: style.contextMenuPadding,
                        'border-radius': style.contextMenuBorderRadius,
                        opacity: style.contextMenuOpacity
                    },
                    'canvas-datagrid-invalid-search-regExp': {
                        background: style.contextMenuFilterInvalidExpresion
                    }
                };
            Object.keys(css).forEach(function (className) {
                styleSheetBody.push('.' + className + '{');
                Object.keys(css[className]).forEach(function (propertyName) {
                    styleSheetBody.push(propertyName + ':' + css[className][propertyName] + ';');
                });
                styleSheetBody.push('}');
            });
            if (document.getElementById(uniqueId)) {
                return;
            }
            styleSheet = document.createElement('link');
            styleSheet.id = uniqueId;
            styleSheet.rel = 'stylesheet';
            if (document.head.firstChild) {
                document.head.insertBefore(styleSheet, document.head.firstChild);
            } else {
                document.head.appendChild(styleSheet);
            }
            styleSheet.href = 'data:text/css;base64,'
                + btoa(style.styleSheet || styleSheetBody.join(''));
        }
        function hideChildGrids() {
            Object.keys(childGrids).forEach(function (gridId) {
                childGrids[gridId].childGridContainer.style.visibility = 'hidden';
                childGrids[gridId].childGridContainer.style.display = 'none';
                childGrids[gridId].hideChildGrids();
            });
        }
        function setGridChildMode(cell) {
            isChildGrid = true;
            parentGrid = cell.parentGrid;
            var headerCellWidth = parentGrid.sizes.columns.cornerCell || parentGrid.style.headerRowWidth,
                childGridContainer = document.createElement('div');
            function resizeChildGrid() {
                var rowId = cell.data[uniqueId];
                if (cell.style === 'tree') {
                    childGridContainer.style.width =
                        (attributes.treeHorizontalScroll
                            ? parentGrid.scrollWidth + headerCellWidth : parentGrid.canvas.offsetWidth)
                        - headerCellWidth + 'px';
                    childGridContainer.style.height = (parentGrid.sizes.rows[rowId]
                        || parentGrid.style.treeGridHeight) - parentGrid.style.cellBorderWidth
                        - intf.originalRowHeight + 'px';
                } else {
                    childGridContainer.style.width = (parentGrid.sizes.columns[cell.header[uniqueId]]
                        || cell.width) - parentGrid.style.cellBorderWidth + 'px';
                    childGridContainer.style.height = (parentGrid.sizes.rows[rowId]
                        || parentGrid.style.cellHeight)
                        - (parentGrid.openChildren[rowId] ? intf.originalRowHeight : 0)
                        - parentGrid.style.cellBorderWidth + 'px';
                }
                args.parentNode = childGridContainer;
                draw();
                requestAnimationFrame(resize);
            }
            document.body.appendChild(childGridContainer);
            childGridContainer.appendChild(container);
            childGridContainer.style.position = 'absolute';
            childGridContainer.style.zIndex = '2';
            childGridContainer.style.overflow = 'hidden';
            childGridContainer.className = 'grid-child-container';
            parentGrid.addEventListener('resize', resizeChildGrid);
            parentGrid.addEventListener('resizecolumn', resizeChildGrid);
            parentGrid.addEventListener('resizerow', resizeChildGrid);
            parentGrid.addEventListener('scroll', scroll);
            intf.childGridContainer = childGridContainer;
            intf.hideChildGrids = hideChildGrids;
            requestAnimationFrame(resizeChildGrid);
        }
        function appendTo(parentNode) {
            if (args.parentNode) {
                if (args.parentNode && args.parentNode.container) {
                    setGridChildMode(args.parentNode);
                    return;
                }
                args.parentNode.appendChild(container);
            }
        }
        function setDom() {
            controlInput = document.createElement('input');
            container = document.createElement('div');
            scrollBox = document.createElement('div');
            scrollArea = document.createElement('div');
            canvas = document.createElement('canvas');
            ctx = canvas.getContext('2d');
            ctx.textBaseline = 'alphabetic';
            canvas.className = 'canvas-datagrid-canvas';
            container.className = 'canvas-datagrid';
            scrollBox.className = 'canvas-datagrid-scrollBox';
            controlInput.className = 'canvas-datagrid-control-input';
            window.addEventListener('resize', function resizeEvent() { requestAnimationFrame(resize); });
            if (container.parentNode) {
                container.parentNode.addEventListener('resize', resize);
            }
            controlInput.addEventListener('keypress', keypress, false);
            controlInput.addEventListener('keyup', keyup, false);
            controlInput.addEventListener('keydown', keydown, false);
            container.addEventListener('mouseup', mouseup, true);
            container.addEventListener('mousedown', mousedown, false);
            container.addEventListener('dblclick', dblclick, false);
            container.addEventListener('click', click, false);
            container.addEventListener('contextmenu', contextmenu, false);
            container.addEventListener('mousemove', mousemove, false);
            container.addEventListener('copy', function (e) {
                var rows = [], sData = getSelectedData();
                sData.forEach(function (row) {
                    if (row) {
                        var r = [];
                        Object.keys(row).forEach(function (key) {
                            r.push(row[key]);
                        });
                        r.join(',');
                        rows.push(r);
                    }
                });
                e.clipboardData.setData('text/plain', rows.join('\n'));
                e.preventDefault();
            });
            scrollBox.addEventListener('scroll', scroll, false);
            container.appendChild(controlInput);
            container.appendChild(scrollBox);
            container.appendChild(canvas);
            scrollBox.appendChild(scrollArea);
            appendTo(args.parentNode);
            attachCss();
        }
        function init() {
            setAttributes();
            setStyle();
            setDom();
            intf.addEventListener = addEventListener;
            intf.removeEventListener = removeEventListener;
            intf.dispatchEvent = dispatchEvent;
            intf.dispose = dispose;
            intf.appendTo = appendTo;
            intf.filters = filters;
            intf.autosize = autosize;
            intf.beginEditAt = beginEditAt;
            intf.endEdit = endEdit;
            intf.setActiveCell = setActiveCell;
            intf.scrollIntoView = scrollIntoView;
            intf.clearChangeLog = clearChangeLog;
            intf.gotoCell = gotoCell;
            intf.gotoRow = gotoRow;
            intf.findColumnScrollLeft = findColumnScrollLeft;
            intf.findRowScrollTop = findRowScrollTop;
            intf.fitColumnToValues = fitColumnToValues;
            intf.findColumnMaxTextLength = findColumnMaxTextLength;
            intf.disposeContextMenu = disposeContextMenu;
            intf.getCellAt = getCellAt;
            intf.order = order;
            intf.draw = draw;
            intf.selectArea = selectArea;
            intf.clipElement = clipElement;
            intf.getSchemaFromData = getSchemaFromData;
            intf.setFilter = setFilter;
            intf.selectRow = selectRow;
            intf.parentGrid = parentGrid;
            intf.toggleTree = toggleTree;
            intf.expandTree = expandTree;
            intf.collapseTree = collapseTree;
            intf.canvas = canvas;
            intf.insertRow = insertRow;
            intf.deleteRow = deleteRow;
            intf.addRow = addRow;
            intf.insertColumn = insertColumn;
            intf.deleteColumn = deleteColumn;
            intf.addColumn = addColumn;
            intf.getClippingRect = getClippingRect;
            Object.defineProperty(intf, 'height', {
                get: function () {
                    return container.height;
                },
                set: function (value) {
                    container.height = value;
                    resize();
                }
            });
            Object.defineProperty(intf, 'width', {
                get: function () {
                    return container.width;
                },
                set: function (value) {
                    container.width = value;
                    resize();
                }
            });
            Object.defineProperty(intf, 'openChildren', {
                get: function () {
                    return openChildren;
                }
            });
            Object.defineProperty(intf, 'childGrids', {
                get: function () {
                    return childGrids;
                }
            });
            Object.defineProperty(intf, 'isChildGrid', {
                get: function () {
                    return isChildGrid;
                }
            });
            Object.defineProperty(intf, 'parentNode', {
                get: function () {
                    return args.parentNode;
                }
            });
            Object.defineProperty(intf, 'offsetLeft', {
                get: function () {
                    return container.offsetLeft;
                }
            });
            Object.defineProperty(intf, 'offsetTop', {
                get: function () {
                    return container.offsetTop;
                }
            });
            Object.defineProperty(intf, 'scrollHeight', {
                get: function () {
                    return scrollBox.scrollHeight;
                }
            });
            Object.defineProperty(intf, 'scrollWidth', {
                get: function () {
                    return scrollBox.scrollWidth;
                }
            });
            Object.defineProperty(intf, 'scrollTop', {
                get: function () {
                    return scrollBox.scrollTop;
                },
                set: function (value) {
                    scrollBox.scrollTop = value;
                    scroll();
                }
            });
            Object.defineProperty(intf, 'scrollLeft', {
                get: function () {
                    return scrollBox.scrollLeft;
                },
                set: function (value) {
                    scrollBox.scrollLeft = value;
                    scroll();
                }
            });
            Object.defineProperty(intf, 'sizes', {
                get: function () {
                    return sizes;
                }
            });
            Object.defineProperty(intf, 'input', {
                get: function () {
                    return input;
                }
            });
            Object.defineProperty(intf, 'controlInput', {
                get: function () {
                    return controlInput;
                }
            });
            Object.defineProperty(intf, 'currentCell', {
                get: function () {
                    return currentCell;
                }
            });
            Object.defineProperty(intf, 'visibleCells', {
                get: function () {
                    return visibleCells;
                }
            });
            Object.defineProperty(intf, 'visibleRows', {
                get: function () {
                    return visibleRows;
                }
            });
            Object.defineProperty(intf, 'selections', {
                get: function () {
                    return selections;
                }
            });
            Object.defineProperty(intf, 'resizeMode', {
                get: function () {
                    return resizeMode;
                }
            });
            Object.defineProperty(intf, 'changes', {
                get: function () {
                    return changes;
                }
            });
            intf.attributes = {};
            intf.style = {};
            intf.formatters = formatters;
            intf.filters = filters;
            Object.keys(style).forEach(function (key) {
                Object.defineProperty(intf.style, key, {
                    get: function () {
                        return style[key];
                    },
                    set: function (value) {
                        style[key] = value;
                        draw();
                    }
                });
            });
            Object.keys(attributes).forEach(function (key) {
                Object.defineProperty(intf.attributes, key, {
                    get: function () {
                        return attributes[key];
                    },
                    set: function (value) {
                        attributes[key] = value;
                        draw();
                    }
                });
            });
            filters.string = function (value, filterFor) {
                if (!filterFor) { return true; }
                var filterRegExp;
                invalidFilterRegEx = undefined;
                try {
                    filterRegExp = new RegExp(filterFor);
                } catch (e) {
                    invalidFilterRegEx = e;
                    return;
                }
                return filterRegExp.test(value);
            };
            filters.number = function (value, filterFor) {
                if (!filterFor) { return true; }
                return value === filterFor;
            };
            Object.defineProperty(intf, 'selectionBounds', {
                get: function () {
                    return getSelectionBounds();
                }
            });
            Object.defineProperty(intf, 'selectedRows', {
                get: function () {
                    return getSelectedData(true);
                }
            });
            Object.defineProperty(intf, 'selectedCells', {
                get: function () {
                    return getSelectedData();
                }
            });
            Object.defineProperty(intf, 'visibleSchema', {
                get: function () {
                    return getVisibleSchema().map(function eachDataRow(col) {
                        return col;
                    });
                }
            });
            Object.defineProperty(intf, 'schema', {
                get: function schemaGetter() {
                    return getSchema();
                },
                set: function schemaSetter(value) {
                    if (!Array.isArray(value) || typeof value[0] !== 'object') {
                        throw new Error('Schema must be an array of objects.');
                    }
                    if (value[0].name === undefined) {
                        throw new Error('Expected schema to contain an object with at least a name property.');
                    }
                    schema = value.map(function eachSchemaColumn(column, index) {
                        column.width = column.width || style.columnWidth;
                        column[uniqueId] = getSchemaNameHash(column.name);
                        column.filter = column.filter || filter(column.type);
                        column.type = column.type || 'string';
                        column.index = index;
                        return column;
                    });
                    createNewRowData();
                    resize();
                }
            });
            Object.defineProperty(intf, 'data', {
                get: function dataGetter() {
                    return data;
                },
                set: function dataSetter(value) {
                    if (!Array.isArray(value)
                            || (value.length > 0 && typeof value[0] !== 'object')) {
                        throw new Error('Data must be an array of objects.');
                    }
                    originalData = value.map(function eachDataRow(row) {
                        row[uniqueId] = uId;
                        uId += 1;
                        return row;
                    });
                    changes = [];
                    data = originalData.filter(dataFilter);
                    if (!schema && data.length > 0) {
                        tempSchema = getSchemaFromData();
                    }
                    if (data.length === 0) {
                        tempSchema = [{name: ''}];
                    }
                    createNewRowData();
                    if (attributes.autoResizeColumns && data.length > 0
                            && storedSettings === undefined) {
                        autosize();
                    }
                    autosize('cornerCell');
                    setScrollArea();
                    if (!resize()) { draw(); }
                }
            });
            if (args.name && attributes.saveAppearance) {
                storedSettings = localStorage.getItem(storageName + '-' + args.name);
                if (storedSettings) {
                    try {
                        storedSettings = JSON.parse(storedSettings);
                    } catch (e) {
                        console.warn('could not read settings from localStore', e);
                        storedSettings = undefined;
                    }
                }
                if (storedSettings
                        && typeof storedSettings.sizes === 'object') {
                    sizes = storedSettings.sizes;
                }
                storedSettings = undefined;
            }
            if (args.data) {
                intf.data = args.data;
            }
            if (args.schema) {
                intf.schema = args.schema;
            }
            if (!data) {
                intf.data = [];
            }
            resize();
        }
        init();
        return intf;
    }
    return grid;
});
