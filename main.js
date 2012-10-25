// Generated by CoffeeScript 1.3.3
(function() {
  var validHTMLTags;

  validHTMLTags = ["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "bdi", "base", "basefont", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "data", "datagrid", "datalist", "dd", "del", "details", "dfn", "dir", "div", "dl", "dt", "em", "embed", "eventsource", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "mark", "map", "menu", "meta", "meter", "nav", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "pre", "progress", "q", "ruby", "rp", "rt", "s", "samp", "script", "section", "select", "small", "source", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"];

  window.element = function(namesOrElement, oncreate) {
    var name, names, newNode, tag, validTags, _ref;
    if (namesOrElement instanceof Element) {
      newNode = namesOrElement;
    } else if (typeof namesOrElement === "string") {
      names = namesOrElement.split(" ");
      validTags = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = names.length; _i < _len; _i++) {
          name = names[_i];
          if (validHTMLTags.indexOf(name >= 0)) {
            _results.push(name);
          }
        }
        return _results;
      })();
      tag = (_ref = validTags[0]) != null ? _ref : "div";
      newNode = document.createElement(tag);
      newNode.className = namesOrElement;
    }
    if (typeof oncreate === "function") {
      newNode.oncreate = oncreate;
    } else if (typeof oncreate === "string") {
      newNode.oncreate = function() {
        return this.appendChild(document.createTextNode(oncreate));
      };
    }
    if (newNode.oncreate != null) {
      newNode.oncreate();
    }
    return newNode;
  };

  Element.prototype.element = function(name, oncreate) {
    var newNode;
    newNode = window.element(name, oncreate);
    this.appendChild(newNode);
    return newNode;
  };

  Element.prototype.text = function(value) {
    return this.appendChild(document.createTextNode(value));
  };

  Element.prototype.attribute = function(name, value) {
    return this.setAttribute(name, value);
  };

  /* --------------------------------------------
       Begin main.coffee
  --------------------------------------------
  */


  document.body.element("background");

  document.body.element("article", function() {
    this.element("header", function() {
      this.element("h1", "just.coffee");
      return this.element("p", "Build the DOM using Coffeescript");
    });
    this.element("section", function() {
      this.element("what", function() {
        this.element("h1", "What");
        this.element("p", "Simple helper functions that let you build the DOM like this");
        return this.element("pre", "@element \"why\", ->\n  @element \"h1\", \"Why\"\n  @element \"ul\", ->\n    @element \"li\", \"Less cognitive dissonance switching between HTML and script\"\n    @element \"li\", \"There is one hierarchy: The code hierarchy\"\n    @element \"li\", \"Full code flexibility in creating templates\"\n    @element \"li\", \"No magic, just functions, it's just coffeescript\"\n  \n");
      });
      this.element("why", function() {
        this.element("h1", "Why");
        return this.element("ul", function() {
          this.element("li", "Less context switching between HTML and script");
          this.element("li", "There is one hierarchy: The code hierarchy");
          this.element("li", "Full code flexibility in creating templates");
          return this.element("li", "No magic, just functions, it's just coffeescript");
        });
      });
      return this.element("how", function() {
        this.element("h1", "How");
        return this.element("ol", function() {
          this.element("li", function() {
            this.text("download it from github ");
            return this.element("a", "here");
          });
          this.element("li", "add the script tag to your header");
          return this.element("li", "start using it!");
        });
      });
    });
    this.element("section", function() {
      this.element("h1", "A rose by any other name");
      this.element("p", "To create an element, just provide the class name(s) you want it to have.");
      this.element("pre", "# Class names which are valid HTML tags will parse accordingly\nelement \"h1\"   # <h1 class=\"h1\"></h1>\nelement \"p\"    # <p class=\"p\"></p>\nelement \"span\" # <span class=\"span\"></span>\n\n# Unknown tags will create divs with that class name\nelement \"foo\" # <div class=\"foo\"></div>\n\n# Multiple class names can be given in the string\n# If there are valid HTML tags among the class names, the first is used.\nelement \"cheese ball cake\" # <div class=\"cheese ball cake\"></div>\nelement \"span h1 lobster\"  # <span class=\"span h1 lobster\"></span>");
      return this.element("p", "You can also pass an already created DOM element instead of a string. This does nothing on its own, but is useful when calling it with an oncreate function or attaching it to a parent element");
    });
    this.element("section", function() {
      this.element("h1", "Batteries included");
      return this.element("p", "Each element can be given a function to be called on its creation. This is done in the context of the created element.");
    });
    this.element("section", function() {
      this.element("h1", "I heard you like elements");
      this.element("p", "Each Element also has a element function that creates an element and adds it as a child node to the Element.");
      this.element("pre", "foo = element \"foo\"\n# Just creates an free standing <div class=\"foo\"></div>\n\nfoo.element \"bar\"\n# foo now has a bar nested inside it\n# <div class=\"foo\">\n#   <div class=\"bar\"></div>  \n# </div>");
      this.element("p", "Use this inside an elements oncreate function with the @ symbol. This allows declarative creation of DOM hierarchies.");
      return this.element("pre", "foobarbazqux = element \"foo\", ->\n  @element \"bar\", ->\n    @element \"baz\", ->\n      @element \"qux\"\n\n# <div class=\"foo\">\n#   <div class=\"bar\">\n#     <div class=\"baz\">\n#       <div class=\"qux\"></div>\n#     </div>\n#   </div>\n# </div>");
    });
    return this.element("section", function() {
      this.element("h1", "Snack packs");
      this.element("p", "To make something modular just wrap it in a function");
      return this.element("pre", "FoobarSnack = (snackName)->\n  element \"foo\", ->\n    element \"bar\", snackName\n\ncheeseNames = [\"cheddar\", \"swiss\", \"blue\"]\ncheesePlate = element \"cheesePlate\", ->\n  for cheeseName in cheeseNames\n    @element FoobarSnack cheeseName\n\n# <div class=\"cheesePlate\">\n#   <div class=\"foo\">\n#     <div class=\"bar\">cheddar</div>\n#   </div>\n#   <div class=\"foo\">\n#     <div class=\"bar\">swiss</div>\n#   </div>\n#   <div class=\"foo\">\n#     <div class=\"bar\">blue</div>\n#   </div>\n# </div>");
    });
  });

}).call(this);
