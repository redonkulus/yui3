/**
 A default set of templates to use with the default Y.Paginator.View.

 @module paginator
 @submodule paginator-templates
 @class Templates
 @namespace Paginator
 @since 3.10.0
 */

var template = new Y.Template(),

    /*
        {
            classNames:,
            href:,
            title:,
            display:,
        }
    */
    control =   '<li class="<%= data.classNames.controlWrapper %>">' +
                    '<a href="<%= data.href %>" title="<%= data.title %>" class="<%= data.classNames.control %> <%= data.controlClass %>" data-type="<%= data.type %>">' +
                        '<%= data.display %>' +
                    '</a>' +
                '</li>',

    /*
        {
            classNames:,
            href:,
            page:,
            title:,
            display:,
        }
    */
    page =  '<li class="<%= data.classNames.controlWrapper %>">' +
                '<a href="<%= data.href %>" data-page="<%= data.page %>" title="<%= data.title %>" class="<%= data.classNames.page %><%= data.selectedClass %>">' +
                    '<%= data.display %>' +
                '</a>' +
            '</li>',

    /*
        {
            classNames:,
            preLabel:,
            page:,
            postLabel:,
        }
    */
    pageInput = '<li class="<%= data.classNames.controlWrapper %>">' +
                    '<label class="<%= data.classNames.control %>" data-type="<%= data.type %>">' +
                        '<%= data.preLabel %>' +
                        '<input class="<%= data.classNames.pageInput %>" type="text" value="<%= data.page %>">' +
                        '<%= data.postLabel %>' +
                    '</label>' +
                '</li>',

    /*
        {
            classNames:,
            preLabel:,
            postLabel:,
            options: [
                {
                    value:,
                    selected:,
                    display:,
                }
            ]
        }
    */
    pageSelect =    '<li class="<%= data.classNames.controlWrapper %>">' +
                        '<label class="<%= data.classNames.control %>" data-type="<%= data.type %>">' +
                            '<%= data.preLabel %> <select class="<%= data.classNames.pageSelect %>">' +
                            '<% Y.Array.each(data.options, function(option) { %>' +
                                '<option value="<%= option.value %>"<% if(option.selected) {%> selected="selected"<% }; %>>' +
                                    '<%= option.display %>' +
                                '</option>' +
                            '<% }); %>' +
                            '</select><%= data.postLabel %>' +
                        '</label>' +
                    '</li>',

    /*
        {
            classNames:,
            preLabel:,
            postLabel:,
            options: [
                {
                    value:,
                    selected:,
                    display:,
                }
            ]
        }
    */
    perPageSelect = '<li class="<%= data.classNames.controlWrapper %>">' +
                        '<label class="<%= data.classNames.control %> <%= data.classNames.pageSelect %>" data-type="<%= data.type %>">' +
                            '<%= data.preLabel %> <select class="">' +
                            '<% Y.Array.each(data.options, function(option) { %>' +
                                '<option value="<%= option.value %>"<% if(option.selected) {%> selected="selected"<% }; %>>' +
                                    '<%= option.display %>' +
                                '</option>' +
                            '<% }); %>' +
                            '</select><%= data.postLabel %>' +
                        '</label>' +
                    '</li>',

    PageTemplates = {
        compile: Y.bind(template.compile, template),
        control: template.compile(control),
        page: template.compile(page),
        pageInput: template.compile(pageInput),
        pageSelect: template.compile(pageSelect),
        perPageSelect: template.compile(perPageSelect)
    };

Y.namespace('Paginator').Templates = PageTemplates;