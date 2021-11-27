window.addEventListener("load", function () {

  // Tooltip
  [].forEach.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'), function (tooltip) { 
    new Tooltip(tooltip);
  });


  // Popover
  [].forEach.call(document.querySelectorAll('[data-bs-toggle="popover"]'), function (popover) { 
    new Popover(popover);
  });


  // SVG Injector
  var SVGInjector = window.SVGInjector.SVGInjector;
  SVGInjector(document.querySelectorAll("[data-inject-svg]"));


  // AOS
  AOS.init({
    duration: 700,
    easing: "ease-out-quad",
    once: true,
    startEvent: "load",
  });


  // Choices
  [].forEach.call(document.querySelectorAll('[data-choices]'), function (toggle) { 
  const elementOptions = toggle.dataset.choices ? JSON.parse(toggle.dataset.choices) : {};

  const defaultOptions = {
    shouldSort: false,
    searchEnabled: false,
    classNames: {
      containerInner: toggle.className,
      input: 'form-control',
      inputCloned: 'form-control-xs',
      listDropdown: 'dropdown-menu',
      itemChoice: 'dropdown-item',
      activeState: 'show',
      selectedState: 'active'
    }
  };

  const options = {
    ...elementOptions,
    ...defaultOptions,
  };

  new Choices(toggle, options);
  });


  // Dropzone
  Dropzone.autoDiscover = false;
  Dropzone.thumbnailWidth = null;
  Dropzone.thumbnailHeight = null;

  [].forEach.call(document.querySelectorAll('[data-dropzone]'), function (toggle) { 
    let currentFile = undefined;

    const elementOptions = toggle.dataset.dropzone ? JSON.parse(toggle.dataset.dropzone) : {};
  
    const defaultOptions = {
      previewsContainer: toggle.querySelector('.dz-preview'),
      previewTemplate: toggle.querySelector('.dz-preview').innerHTML,
      init: function() {
        this.on('addedfile', function(file) {
          const maxFiles = elementOptions.maxFiles;
  
          if (maxFiles == 1 && currentFile) {
            this.removeFile(currentFile);
          }
  
          currentFile = file;
        });
      }
    }
  
    const options = {
      ...elementOptions,
      ...defaultOptions
    };
  
    // Clear preview
    toggle.querySelector('.dz-preview').innerHTML = '';
  
    // Init dropzone
    new Dropzone(toggle, options);
  });

    
  // Quill
  [].forEach.call(document.querySelectorAll('[data-bs-toggle="popover"]'), function (toggle) { 
  const elementOptions = toggle.dataset.quill ? JSON.parse(toggle.dataset.quill) : {};

  const defaultOptions = {
    modules: {
      toolbar: [
        ['bold', 'italic'],
        ['link', 'blockquote', 'code', 'image'],
        [{
          'list': 'ordered'
        }, {
          'list': 'bullet'
        }]
      ],
    },
    theme: 'snow',
  };

  const options = {
    ...elementOptions,
    ...defaultOptions
  };

  new Quill(toggle, options);
  });


  // BigPicture
  const toggles = document.querySelectorAll('[data-bigpicture]');
  [].forEach.call(toggles, function (toggle) { 
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
  
      const elementOptions = JSON.parse(toggle.dataset.bigpicture);
  
      const defaultOptions = {
        el: toggle,
        noLoader: true
      };
  
      const options = {
        ...defaultOptions,
        ...elementOptions
      };
  
      BigPicture(options);
    });
  });


  // Common
});
